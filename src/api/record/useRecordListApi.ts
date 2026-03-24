import { useQuery } from "@tanstack/react-query";
import { getRecordList } from "@/api/record/recordListApi";
import type { RecordListResponse } from "./recordTypes";

type UseRecordListOptions = {
  /** false면 쿼리 비활성 (비로그인 시 401 → 전역 /auth 리다이렉트 방지) */
  enabled?: boolean;
};

export function useRecordList(options?: UseRecordListOptions) {
  return useQuery<RecordListResponse>({
    queryKey: ["records"],
    queryFn: getRecordList,
    enabled: options?.enabled ?? true,
  });
}
