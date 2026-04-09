import { useQuery } from "@tanstack/react-query";
import { getAccountInfo } from "@/api/myPage/myPageApi";
import type { AccountInfoResponse } from "@/api/myPage/myPageTypes";

export function useMyPageAccountInfo() {
  return useQuery<AccountInfoResponse, Error>({
    queryKey: ["myPage", "accountInfo"],
    queryFn: getAccountInfo,
  });
}
