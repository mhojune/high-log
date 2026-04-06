import { useQuery, type UseQueryOptions, type UseQueryResult } from "@tanstack/react-query";
import { getFaqs } from "./faqApi";
import type { FaqRequestParams, FaqResponse } from "./faqTypes";

export function useFaqs(
  params?: FaqRequestParams,
  options?: Omit<UseQueryOptions<FaqResponse, Error>, "queryKey" | "queryFn">
): UseQueryResult<FaqResponse, Error> {
  return useQuery({
    queryKey: ["faqs", params],
    queryFn: () => getFaqs(params),
    ...options,
  });
}
