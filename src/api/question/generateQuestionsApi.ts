import { ApiErrorException, BASE_URL } from "@/api/client";
import { tokenStorage } from "@/lib/tokenStorage";
import type {
  GenerateQuestionsRequest,
  GenerateQuestionsSSEEvent,
} from "@/api/question/questionTypes";

export async function generateQuestionsAndStream(
  recordId: number,
  body: GenerateQuestionsRequest,
  onProgress?: (progress: number) => void
): Promise<void> {
  const accessToken = tokenStorage.getAccessToken();
  const response = await fetch(
    `${BASE_URL}/ai/records/${recordId}/generate-questions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    const code = (data as { code?: string }).code ?? "UNKNOWN_ERROR";
    const message =
      (data as { message?: string }).message ??
      "질문 생성 요청이 실패했습니다.";
    throw new ApiErrorException(code, message, response.status);
  }

  const reader = response.body?.getReader();
  if (!reader) {
    throw new ApiErrorException(
      "STREAM_ERROR",
      "스트림을 읽을 수 없습니다.",
    );
  }

  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();

      if (value) {
        buffer += decoder.decode(value, { stream: true });
      }

      let eventEndIndex = buffer.indexOf("\n\n");
      if (eventEndIndex === -1) {
        eventEndIndex = buffer.indexOf("\n");
      }

      while (eventEndIndex !== -1) {
        const eventText = buffer.slice(0, eventEndIndex).trim();
        buffer = buffer.slice(
          eventEndIndex + (buffer[eventEndIndex + 1] === "\n" ? 2 : 1)
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
            const event = JSON.parse(json) as GenerateQuestionsSSEEvent;
            console.log("[SSE Event]", event);
            onProgress?.(event.progress);
            if (event.type === "complete") {
              return;
            }
          } catch (err) {
            console.error("[SSE Parse Error]", err, "Raw:", eventText);
          }
        }

        eventEndIndex = buffer.indexOf("\n\n");
        if (eventEndIndex === -1) {
          eventEndIndex = buffer.indexOf("\n");
        }
      }

      if (done) {
        if (buffer.trim()) {
          const trimmed = buffer.trim();
          if (trimmed.startsWith("data:")) {
            try {
              const json = trimmed.slice(5).trim();
              if (json) {
                const event = JSON.parse(json) as GenerateQuestionsSSEEvent;
                console.log("[SSE Final Event]", event);
                onProgress?.(event.progress);
                if (event.type === "complete") {
                  return;
                }
              }
            } catch (err) {
              console.error("[SSE Final Parse Error]", err, "Raw:", trimmed);
            }
          }
        }
        break;
      }
    }
  } catch (err) {
    console.error("[SSE Stream Error]", err);
    throw new ApiErrorException(
      "STREAM_ERROR",
      err instanceof Error ? err.message : "스트림 읽기 중 오류가 발생했습니다.",
    );
  } finally {
    reader.releaseLock();
  }
}
