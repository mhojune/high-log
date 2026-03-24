import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toggleBookmark, getBookmarkList } from "./bookmarkApi";
import type { Question } from "@/api/question/questionTypes";

export function useBookmarkList() {
  return useQuery({
    queryKey: ["bookmarkList"],
    queryFn: getBookmarkList,
  });
}

export function useToggleBookmark(setId: number | undefined, category: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleBookmark,
    onSuccess: (data) => {
      queryClient.setQueryData<Question[]>(
        ["questionList", setId, category],
        (old) => {
          if (!old) return old;
          return old.map((q) =>
            q.questionId === data.questionId
              ? { ...q, isBookmarked: data.isBookmarked }
              : q
          );
        }
      );
    },
  });
}

export function useToggleBookmarkFromStorage() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bookmarkList"] });
    },
  });
}
