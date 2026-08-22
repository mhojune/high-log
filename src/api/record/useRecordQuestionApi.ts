import { useQuery } from "@tanstack/react-query";
import { getRecordQuestions } from "./recordQuestionApi";
import type { RecordQuestion } from "./recordTypes";

export const useRecordQuestions = (recordId: number) => {
  return useQuery<RecordQuestion[], Error>({
    queryKey: ["recordQuestions", recordId],
    queryFn: () => getRecordQuestions(recordId),
    enabled: !!recordId,
  });
};
