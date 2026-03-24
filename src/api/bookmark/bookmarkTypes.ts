export interface ToggleBookmarkResponse {
  questionId: number;
  isBookmarked: boolean;
}

export interface BookmarkItem {
  questionId: number;
  recordTitle: string;
  category: string;
  content: string;
  difficulty: string;
  evaluationCriteria: string;
  modelAnswer: string | null;
  purpose: string;
  createdAt: string;
}
