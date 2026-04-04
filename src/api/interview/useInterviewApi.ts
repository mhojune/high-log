import {
  useMutation,
  useQuery,
  type UseMutationOptions,
  type UseMutationResult,
  type UseQueryOptions,
  type UseQueryResult,
} from "@tanstack/react-query";
import {
  chatInterviewText,
  getInterviewAnalyze,
  initializeInterviewText,
} from "@/api/interview/interviewApi";
import type {
  InterviewAnalyzeResponse,
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
    { sessionId: string; request: InterviewChatRequest }
  >,
): UseMutationResult<
  InterviewChatResponse,
  Error,
  { sessionId: string; request: InterviewChatRequest }
> {
  return useMutation({
    mutationFn: ({ sessionId, request }) =>
      chatInterviewText(sessionId, request),
    ...options,
  });
}

export function useInterviewAnalyze(
  sessionId: string,
  options?: Omit<
    UseQueryOptions<InterviewAnalyzeResponse, Error>,
    "queryKey" | "queryFn"
  >,
): UseQueryResult<InterviewAnalyzeResponse, Error> {
  return useQuery({
    queryKey: ["interviewAnalyze", sessionId],
    queryFn: () => getInterviewAnalyze(sessionId),
    enabled: !!sessionId,
    ...options,
  });
}
