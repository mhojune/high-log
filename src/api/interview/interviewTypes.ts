export interface InterviewInitializeRequest {
  record_id: number;
  difficulty: "Easy" | "Normal" | "Hard";
  first_answer: string;
  response_time: number; 
}

export interface InterviewChatRequest {
  answer: string;
  response_time: number; 
}

export interface InterviewChatResponse {
  next_question: string;
  is_finished: boolean;
  thread_id?: string; 
}
