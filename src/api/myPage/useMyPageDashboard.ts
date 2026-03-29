import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "@/api/myPage/myPageApi";
import type { DashboardResponse } from "@/api/myPage/myPageTypes";

export function useMyPageDashboard() {
  return useQuery<DashboardResponse, Error>({
    queryKey: ["myPage", "dashboard"],
    queryFn: getDashboard,
  });
}
