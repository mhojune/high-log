import { useQuery, type UseQueryOptions, type UseQueryResult } from "@tanstack/react-query";
import { getNotices, getNoticeDetail } from "./noticeApi";
import type { NoticeRequestParams, NoticeResponse, NoticeItem } from "./noticeTypes";

export function useNotices(
  params?: NoticeRequestParams,
  options?: Omit<UseQueryOptions<NoticeResponse, Error>, "queryKey" | "queryFn">
): UseQueryResult<NoticeResponse, Error> {
  return useQuery({
    queryKey: ["notices", params],
    queryFn: () => getNotices(params),
    ...options,
  });
}

export function useNoticeDetail(
  id: number,
  options?: Omit<UseQueryOptions<NoticeItem, Error>, "queryKey" | "queryFn">
): UseQueryResult<NoticeItem, Error> {
  return useQuery({
    queryKey: ["notice", id],
    queryFn: () => getNoticeDetail(id),
    enabled: !!id,
    ...options,
  });
}
