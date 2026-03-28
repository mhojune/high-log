import { apiClient, ApiErrorException, BASE_URL } from "@/api/client";
import { tokenStorage } from "@/lib/tokenStorage";
import type {
  CreateRecordRequest,
  RecordUploadResponse,
  RegisterRecordSSEEvent,
} from "@/api/record/recordTypes";

export async function getPresignedUrl(
  fileName: string,
): Promise<RecordUploadResponse> {
  const encoded = encodeURIComponent(fileName);
  return apiClient<RecordUploadResponse>(
    `/api/records/presigned-url?fileName=${encoded}`,
    { method: "GET" },
  );
}

export async function uploadFileToS3(
  presignedUrl: string,
  file: File,
): Promise<void> {
  const response = await fetch(presignedUrl, {
    method: "PUT",
    body: file,
    headers: {
      "Content-Type": file.type || "application/pdf",
    },
  });
  if (!response.ok) {
    throw new Error(`S3 업로드 실패: ${response.status}`);
  }
}

export async function registerRecordAndStream(
  body: CreateRecordRequest,
  onProgress?: (progress: number) => void,
): Promise<void> {
  const accessToken = tokenStorage.getAccessToken();
  const response = await fetch(`${BASE_URL}/ai/records`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    const code = (data as { code?: string }).code ?? "UNKNOWN_ERROR";
    const message =
      (data as { message?: string }).message ??
      "생기부 등록 요청이 실패했습니다.";
    throw new ApiErrorException(code, message, response.status);
  }

  const reader = response.body?.getReader();
  if (!reader) {
    throw new ApiErrorException("STREAM_ERROR", "스트림을 읽을 수 없습니다.");
  }

  const decoder = new TextDecoder();
  let buffer = "";
  let isCompleted = false;

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (value) {
        buffer += decoder.decode(value, { stream: true });
      }

      // SSE 이벤트는 \n\n 또는 \n으로 구분됨
      // 먼저 \n\n으로 이벤트를 구분하고, 없으면 \n으로 구분
      let eventEndIndex = buffer.indexOf("\n\n");
      if (eventEndIndex === -1) {
        eventEndIndex = buffer.indexOf("\n");
      }

      while (eventEndIndex !== -1) {
        const eventText = buffer.slice(0, eventEndIndex).trim();
        buffer = buffer.slice(
          eventEndIndex + (buffer[eventEndIndex + 1] === "\n" ? 2 : 1),
        );

        if (eventText.startsWith("data:")) {
          try {
            const json = eventText.slice(5).trim();
            if (json === "") {
              eventEndIndex = buffer.indexOf("\n\n");
              if (eventEndIndex === -1) {
                eventEndIndex = buffer.indexOf("\n");
              }
              continue;
            }
            const event = JSON.parse(json) as RegisterRecordSSEEvent;
            console.log("[SSE Event]", event);
            if (typeof event.progress === "number") {
              onProgress?.(event.progress);
            }

            if (event.type === "error") {
              throw new ApiErrorException(
                "REGISTER_FAILED",
                event.message ?? "생기부 처리 중 오류가 발생했습니다.",
              );
            }

            if (event.type === "complete") {
              isCompleted = true;
              return;
            }
          } catch (err) {
            if (err instanceof ApiErrorException) {
              throw err;
            }
            console.error("[SSE Parse Error]", err, "Raw:", eventText);
          }
        }

        eventEndIndex = buffer.indexOf("\n\n");
        if (eventEndIndex === -1) {
          eventEndIndex = buffer.indexOf("\n");
        }
      }

      if (done) {
        // 마지막 버퍼에 남은 데이터 처리
        if (buffer.trim()) {
          const trimmed = buffer.trim();
          if (trimmed.startsWith("data:")) {
            try {
              const json = trimmed.slice(5).trim();
              if (json) {
                const event = JSON.parse(json) as RegisterRecordSSEEvent;
                console.log("[SSE Final Event]", event);
                if (typeof event.progress === "number") {
                  onProgress?.(event.progress);
                }

                if (event.type === "error") {
                  throw new ApiErrorException(
                    "REGISTER_FAILED",
                    event.message ?? "생기부 처리 중 오류가 발생했습니다.",
                  );
                }

                if (event.type === "complete") {
                  isCompleted = true;
                  return;
                }
              }
            } catch (err) {
              if (err instanceof ApiErrorException) {
                throw err;
              }
              console.error("[SSE Final Parse Error]", err, "Raw:", trimmed);
            }
          }
        }
        break;
      }
    }

    if (!isCompleted) {
      throw new ApiErrorException(
        "REGISTER_INCOMPLETE",
        "생기부 생성이 완료되지 않았습니다. 잠시 후 다시 시도해 주세요.",
      );
    }
  } catch (err) {
    console.error("[SSE Stream Error]", err);
    if (err instanceof ApiErrorException) {
      throw err;
    }
    throw new ApiErrorException(
      "STREAM_ERROR",
      err instanceof Error
        ? err.message
        : "스트림 읽기 중 오류가 발생했습니다.",
    );
  } finally {
    reader.releaseLock();
  }
}
