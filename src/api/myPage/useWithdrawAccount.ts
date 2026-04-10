import { useMutation } from "@tanstack/react-query";
import { withdrawAccount } from "@/api/myPage/myPageApi";
import type { WithdrawAccountRequest } from "@/api/myPage/myPageTypes";

export function useWithdrawAccount() {
  return useMutation({
    mutationFn: (body: WithdrawAccountRequest) => withdrawAccount(body),
  });
}
