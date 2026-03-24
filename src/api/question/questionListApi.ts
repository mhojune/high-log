import { apiClient } from "../client";
import type { Question } from "./questionTypes";

export async function getQuestionList(
  setId: number,
  category?: string
): Promise<Question[]> {
  const url = category
    ? `/api/question-sets/${setId}/questions?category=${category}`
    : `/api/question-sets/${setId}/questions`;

  const result = await apiClient<Question[]>(url, {
    method: "GET",
  });
  console.log("[GET 질문 목록 조회]", { url, setId, category, result });
  return result;
}
