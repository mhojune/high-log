import { apiClient } from "../client";
import type { RecordQuestion } from "./recordTypes";

export const getRecordQuestions = async (
  recordId: number,
): Promise<RecordQuestion[]> => {
  return await apiClient<RecordQuestion[]>(`/api/records/${recordId}/questions`, {
    method: "GET",
  });
};
