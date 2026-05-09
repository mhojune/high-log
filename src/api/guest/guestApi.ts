import { ApiErrorException, BASE_URL } from "@/api/client";
import { uploadFileToS3 } from "@/api/record/recordUpload";
import type {
  GuestMigrateRequest,
  GuestMigrateResponse,
  GuestPresignedUrlResponse,
  GuestQuestion,
  GuestQuestionFilters,
  GuestQuestionRequest,
  GuestRecordRequest,
  GuestSessionResponse,
  GuestSSEEvent,
} from "@/api/guest/guestTypes";

async function parseSSEStream(
  response: Response,
  onProgress?: (progress: number) => void,
): Promise<void> {
  const reader = response.body?.getReader();
  if (!reader) {
    throw new ApiErrorException("STREAM_ERROR", "스트림을 읽을 수 없습니다.");
  }

  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (value) buffer += decoder.decode(value, { stream: true });

      let eventEndIndex = buffer.indexOf("\n\n");
      if (eventEndIndex === -1) eventEndIndex = buffer.indexOf("\n");

      while (eventEndIndex !== -1) {
        const eventText = buffer.slice(0, eventEndIndex).trim();
        buffer = buffer.slice(
          eventEndIndex + (buffer[eventEndIndex + 1] === "\n" ? 2 : 1),
        );

        if (eventText.startsWith("data:")) {
          const json = eventText.slice(5).trim();
          if (json) {
            const event = JSON.parse(json) as GuestSSEEvent;
            if (typeof event.progress === "number") onProgress?.(event.progress);

            if (event.type === "error") {
              throw new ApiErrorException(
                "GUEST_STREAM_ERROR",
                event.message ?? "게스트 처리 중 오류가 발생했습니다.",
              );
            }
            if (event.type === "complete") return;
          }
        }

        eventEndIndex = buffer.indexOf("\n\n");
        if (eventEndIndex === -1) eventEndIndex = buffer.indexOf("\n");
      }

      if (done) break;
    }
  } catch (error) {
    if (error instanceof ApiErrorException) throw error;
    throw new ApiErrorException(
      "STREAM_ERROR",
      error instanceof Error ? error.message : "스트림 처리 중 오류가 발생했습니다.",
    );
  } finally {
    reader.releaseLock();
  }

  throw new ApiErrorException(
    "GUEST_INCOMPLETE",
    "처리가 완료되지 않았습니다. 잠시 후 다시 시도해 주세요.",
  );
}

export async function issueGuestSession(): Promise<GuestSessionResponse> {
  const response = await fetch(`${BASE_URL}/ai/guest/session`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new ApiErrorException(
      (data as { code?: string }).code ?? "GUEST_SESSION_FAILED",
      (data as { message?: string }).message ?? "게스트 세션 발급에 실패했습니다.",
      response.status,
    );
  }
  return data as GuestSessionResponse;
}

export async function uploadGuestRecordAndParse(
  file: File,
  onProgress?: (progress: number) => void,
): Promise<void> {
  const presignedData = await getGuestPresignedUrl(file.name);
  const { presignedUrl, s3Key } = presignedData;
  await uploadFileToS3(presignedUrl, file);
  await parseGuestRecordAndStream({ filename: file.name, s3Key }, onProgress);
}

export async function getGuestPresignedUrl(
  fileName: string,
): Promise<GuestPresignedUrlResponse> {
  const encoded = encodeURIComponent(fileName);
  const response = await fetch(`${BASE_URL}/ai/guest/presigned-url?fileName=${encoded}`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new ApiErrorException(
      (data as { code?: string }).code ?? "GUEST_PRESIGNED_FAILED",
      (data as { message?: string }).message ?? "게스트 업로드 URL 발급에 실패했습니다.",
      response.status,
    );
  }
  return data as GuestPresignedUrlResponse;
}

export async function parseGuestRecordAndStream(
  body: GuestRecordRequest,
  onProgress?: (progress: number) => void,
): Promise<void> {
  const response = await fetch(`${BASE_URL}/ai/guest/records`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new ApiErrorException(
      (data as { code?: string }).code ?? "GUEST_RECORD_FAILED",
      (data as { message?: string }).message ?? "게스트 생기부 파싱에 실패했습니다.",
      response.status,
    );
  }

  await parseSSEStream(response, onProgress);
}

export async function generateGuestQuestionsAndStream(
  body: GuestQuestionRequest,
  onProgress?: (progress: number) => void,
): Promise<void> {
  const response = await fetch(`${BASE_URL}/ai/guest/questions`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({}));
    throw new ApiErrorException(
      (data as { code?: string }).code ?? "GUEST_QUESTION_FAILED",
      (data as { message?: string }).message ?? "게스트 질문 생성에 실패했습니다.",
      response.status,
    );
  }

  await parseSSEStream(response, onProgress);
}

export async function getGuestQuestions(
  filters: GuestQuestionFilters = {},
): Promise<GuestQuestion[]> {
  const params = new URLSearchParams();
  if (filters.category) params.set("category", filters.category);
  if (filters.difficulty) params.set("difficulty", filters.difficulty);
  const queryString = params.toString();
  const endpoint = queryString
    ? `/ai/guest/questions?${queryString}`
    : "/ai/guest/questions";

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new ApiErrorException(
      (data as { code?: string }).code ?? "GUEST_QUESTION_LIST_FAILED",
      (data as { message?: string }).message ?? "게스트 질문 조회에 실패했습니다.",
      response.status,
    );
  }
  return data as GuestQuestion[];
}

export async function migrateGuestWork(
  body: GuestMigrateRequest,
): Promise<GuestMigrateResponse> {
  const response = await fetch(`${BASE_URL}/ai/guest/migrate`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new ApiErrorException(
      (data as { code?: string }).code ?? "GUEST_MIGRATE_FAILED",
      (data as { message?: string }).message ?? "게스트 이관에 실패했습니다.",
      response.status,
    );
  }
  return data as GuestMigrateResponse;
}
