import { apiClient } from "../client";
import type { RecordDetail } from "./recordTypes";

export const getRecordDetail = async (
  recordId: number,
): Promise<RecordDetail> => {
  return await apiClient<RecordDetail>(`/api/records/${recordId}`, {
    method: "GET",
  });
};

export const deleteRecord = async (recordId: number): Promise<void> => {
  await apiClient<void>(`/api/records/${recordId}`, {
    method: "DELETE",
  });
};
