import { apiClient } from "@/api/client";
import type { FaqRequestParams, FaqResponse } from "./faqTypes";

export async function getFaqs(params?: FaqRequestParams): Promise<FaqResponse> {
  const queryParams = new URLSearchParams();
  if (params?.category) queryParams.append("category", params.category);
  if (params?.page !== undefined) queryParams.append("page", params.page.toString());
  if (params?.size !== undefined) queryParams.append("size", params.size.toString());

  const queryString = queryParams.toString();
  const url = queryString ? `/api/faqs?${queryString}` : "/api/faqs";

  return apiClient<FaqResponse>(url, {
    method: "GET",
  });
}
