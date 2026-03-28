export interface InterviewInitializeRequest {
  record_id: number;
  difficulty: "Easy" | "Normal" | "Hard";
  target_university: string;
  target_department: string;
}

export interface InterviewChatRequest {
  answer: string;
  response_time: number;
}

export interface InterviewChatResponse {
  next_question: string;
  is_finished: boolean;
  session_id: string;
}
