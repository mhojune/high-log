import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
} from "@tanstack/react-query";
import {
  chatInterviewText,
  initializeInterviewText,
} from "@/api/interview/interviewApi";
import type {
  InterviewChatRequest,
  InterviewChatResponse,
  InterviewInitializeRequest,
} from "@/api/interview/interviewTypes";

export function useInitializeInterviewText(
  options?: UseMutationOptions<
    InterviewChatResponse,
    Error,
    InterviewInitializeRequest
  >,
): UseMutationResult<InterviewChatResponse, Error, InterviewInitializeRequest> {
  return useMutation({
    mutationFn: initializeInterviewText,
    ...options,
  });
}

export function useChatInterviewText(
  options?: UseMutationOptions<
    InterviewChatResponse,
    Error,
    { threadId: string; request: InterviewChatRequest }
  >,
): UseMutationResult<
  InterviewChatResponse,
  Error,
  { threadId: string; request: InterviewChatRequest }
> {
  return useMutation({
    mutationFn: ({ threadId, request }) => chatInterviewText(threadId, request),
    ...options,
  });
}
