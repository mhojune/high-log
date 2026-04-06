import { apiClient } from "@/api/client";
import type { NoticeRequestParams, NoticeResponse, NoticeItem } from "./noticeTypes";

export async function getNotices(params?: NoticeRequestParams): Promise<NoticeResponse> {
  const queryParams = new URLSearchParams();
  if (params?.page !== undefined) queryParams.append("page", params.page.toString());
  if (params?.size !== undefined) queryParams.append("size", params.size.toString());

  const queryString = queryParams.toString();
  const url = queryString ? `/api/notices?${queryString}` : "/api/notices";

  return apiClient<NoticeResponse>(url, {
    method: "GET",
  });
}

export async function getNoticeDetail(id: number): Promise<NoticeItem> {
  return apiClient<NoticeItem>(`/api/notices/${id}`, {
    method: "GET",
  });
}
