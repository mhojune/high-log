import { apiClient } from "../client";
import type { ToggleBookmarkResponse, BookmarkItem } from "./bookmarkTypes";

export async function toggleBookmark(
  questionId: number
): Promise<ToggleBookmarkResponse> {
  const body = { questionId };
  console.log("[즐겨찾기 추가/해제] 전송 값:", body);
  return await apiClient<ToggleBookmarkResponse>("/api/bookmarks", {
    method: "POST",
    body: JSON.stringify(body),
  });
}

export async function getBookmarkList(): Promise<BookmarkItem[]> {
  return await apiClient<BookmarkItem[]>("/api/bookmarks", {
    method: "GET",
  });
}
