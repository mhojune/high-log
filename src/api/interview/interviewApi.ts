import { apiClient } from "@/api/client";
import type {
  InterviewChatRequest,
  InterviewChatResponse,
  InterviewInitializeRequest,
} from "@/api/interview/interviewTypes";

export async function initializeInterviewText(
  request: InterviewInitializeRequest,
): Promise<InterviewChatResponse> {
  return apiClient<InterviewChatResponse>("/ai/interview/initialize/text", {
    method: "POST",
    body: JSON.stringify(request),
  });
}

export async function chatInterviewText(
  threadId: string,
  request: InterviewChatRequest,
): Promise<InterviewChatResponse> {
  return apiClient<InterviewChatResponse>(
    `/ai/interview/chat/text/${threadId}`,
    {
      method: "POST",
      body: JSON.stringify(request),
    },
  );
}
