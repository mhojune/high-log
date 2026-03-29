import { useQuery } from "@tanstack/react-query";
import { getSetting } from "@/api/myPage/myPageApi";
import type { SettingResponse } from "@/api/myPage/myPageTypes";

export function useMyPageSetting() {
  return useQuery<SettingResponse, Error>({
    queryKey: ["myPage", "setting"],
    queryFn: getSetting,
  });
}
