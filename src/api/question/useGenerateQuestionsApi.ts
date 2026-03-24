import {
  useMutation,
  type UseMutationOptions,
  type UseMutationResult,
} from "@tanstack/react-query";
import { generateQuestionsAndStream } from "@/api/question/generateQuestionsApi";
import type { GenerateQuestionsRequest } from "@/api/question/questionTypes";

export interface GenerateQuestionsVariables {
  recordId: number;
  body: GenerateQuestionsRequest;
  onProgress?: (progress: number) => void;
}

export function useGenerateQuestions(
  options?: UseMutationOptions<void, Error, GenerateQuestionsVariables>
): UseMutationResult<void, Error, GenerateQuestionsVariables> {
  return useMutation({
    mutationFn: async ({ recordId, body, onProgress }) => {
      await generateQuestionsAndStream(recordId, body, onProgress);
    },
    ...options,
  });
}
