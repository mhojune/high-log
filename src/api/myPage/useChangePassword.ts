import { useMutation } from "@tanstack/react-query";
import { changePassword } from "@/api/myPage/myPageApi";
import type { ChangePasswordRequest } from "@/api/myPage/myPageTypes";

export function useChangePassword() {
  return useMutation({
    mutationFn: (body: ChangePasswordRequest) => changePassword(body),
  });
}
