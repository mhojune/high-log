export interface InterviewInitializeRequest {
  record_id: number;
  difficulty: "Easy" | "Normal" | "Hard";
  target_university: string;
  target_department: string;
  mode: "text" | "voice";
}

export interface InterviewChatRequest {
  answer: string;
  response_time: number;
}

export interface InterviewChatResponse {
  next_question: string;
  is_finished: boolean;
  session_id: string;
  audio_url?: string;
  visemes?: Viseme[];
}

export interface Viseme {
  offset: number;
  id: number;
}

export interface InterviewChatAudioResponse {
  transcript: string;
  next_question: string;
  audio_url: string;
  sub_topic: string;
  remaining_time: number;
  is_finished: boolean;
  visemes?: Viseme[];
}

export interface InterviewLog {
  question: string;
  answer: string;
  response_time: number;
  sub_topic: string;
}

export interface InterviewScores {
  전공적합성: number;
  인성: number;
  발전가능성: number;
  의사소통능력: number;
  총점: number;
}

export interface DetailedAnalysis {
  question: string;
  response_time: number;
  evaluation: string;
  improvement_point: string;
  supplement_needed: string;
}

export interface InterviewAnalyzeResponse {
  interview_logs: InterviewLog[];
  scores: InterviewScores;
  strength_tags: string[];
  weakness_tags: string[];
  detailed_analysis: DetailedAnalysis[];
  target_university: string;
  target_department: string;
  mode: string;
  difficulty: string;
}

export interface InterviewListItem {
  session_id: number | string;
  question_count: number;
  total_duration: number;
  sub_topics: string[];
  created_at: string;
}

export interface AzureSpeechTokenResponse {
  token: string;
  region: string;
  expires_in: number;
  speech_synthesis_language: string;
  speech_synthesis_voice_name: string;
}

export interface InterviewListResponse {
  interviews: InterviewListItem[];
}
