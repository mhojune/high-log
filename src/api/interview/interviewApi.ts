import { apiClient, apiClientStream } from "@/api/client";
import type {
  InterviewAnalyzeResponse,
  InterviewChatRequest,
  InterviewChatResponse,
  InterviewInitializeRequest,
} from "@/api/interview/interviewTypes";

export async function initializeInterviewText(
  request: InterviewInitializeRequest,
): Promise<InterviewChatResponse> {
  return apiClient<InterviewChatResponse>("/ai/interview/start", {
    method: "POST",
    body: JSON.stringify(request),
  });
}

export async function chatInterviewTextStream(
  session_id: string,
  request: InterviewChatRequest,
  onMessage: (data: unknown) => void,
  onError: (error: unknown) => void,
): Promise<void> {
  try {
    const response = await apiClientStream(
      `/ai/interview/chat/text/${session_id}`,
      {
        method: "POST",
        body: JSON.stringify(request),
        headers: {
          Accept: "text/event-stream",
        },
      },
    );

    if (!response.body) {
      throw new Error("No response body");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");

      buffer = lines.pop() || "";

      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith("data:")) {
          const dataStr = trimmed.substring(5).trim();

          console.log("Raw SSE Line:", dataStr);
          if (dataStr) {
            try {
              const parsed = JSON.parse(dataStr);
              console.log("Parsed SSE Data:", parsed);
              onMessage(parsed);
            } catch (e) {
              console.error("Error parsing SSE data:", e);
            }
          }
        }
      }
    }
  } catch (error) {
    onError(error);
    throw error;
  }
}

export async function getInterviewAnalyze(
  session_id: string,
): Promise<InterviewAnalyzeResponse> {
  return apiClient<InterviewAnalyzeResponse>(
    `/ai/interview/analyze/${session_id}`,
    {
      method: "GET",
    },
  );
}
