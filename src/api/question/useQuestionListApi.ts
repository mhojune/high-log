import { useQuery } from "@tanstack/react-query";
import { getQuestionList } from "./questionListApi";

export function useQuestionList(
  setId: number | undefined,
  category?: string
) {
  return useQuery({
    queryKey: ["questionList", setId, category ?? "all"],
    queryFn: () => getQuestionList(setId!, category),
    enabled: !!setId,
  });
}
