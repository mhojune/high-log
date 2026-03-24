import { apiClient } from "@/api/client";
import type { RecordListResponse } from "@/api/record/recordTypes";

export async function getRecordList(): Promise<RecordListResponse> {
  const result = await apiClient<RecordListResponse>("/api/records", {
    method: "GET",
  });
  console.log("[GET /api/records] 응답:", result);
  return result;
}
