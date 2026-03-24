export interface GenerateQuestionsRequest {
  title: string;
  target_school: string;
  target_major: string;
  interview_type: string;
}

export interface GenerateQuestionsSSEEvent {
  type: "processing" | "complete";
  progress: number;
}

export interface Question {
  questionId: number;
  content: string;
  category: string;
  difficulty: string;
  purpose: string;
  answerPoints: string;
  modelAnswer: string;
  evaluationCriteria: string;
  isBookmarked: boolean;
}
