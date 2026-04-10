import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeName } from "@/api/myPage/myPageApi";
import type { ChangeNameRequest } from "@/api/myPage/myPageTypes";

export function useChangeName() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: ChangeNameRequest) => changeName(body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myPage", "accountInfo"] });
      queryClient.invalidateQueries({ queryKey: ["myPage", "dashboard"] });
    },
  });
}
