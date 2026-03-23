import { apiClient } from "@/api/client";
import type {
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

export async function chatInterviewText(
  session_id: string,
  request: InterviewChatRequest,
): Promise<InterviewChatResponse> {
  return apiClient<InterviewChatResponse>(
    `/ai/interview/chat/text/${session_id}`,
    {
      method: "POST",
      body: JSON.stringify(request),
    },
  );
}
