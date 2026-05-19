export interface GuestSessionResponse {
  message: string;
}

export interface GuestRecordRequest {
  filename: string;
  s3Key: string;
}

export interface GuestQuestionRequest {
  target_school: string;
  target_major: string;
  interview_type: string;
}

export interface GuestQuestion {
  questionId: number;
  answerPoints: string;
  category: string;
  content: string;
  difficulty: string;
  evaluationCriteria: string;
  isBookmarked: boolean;
  modelAnswer: string;
  purpose: string;
}

export interface GuestQuestionFilters {
  category?: string;
  difficulty?: string;
}

export interface GuestPresignedUrlResponse {
  presignedUrl: string;
  s3Key: string;
  expiresIn: number;
}

export interface GuestSSEEvent {
  type: "processing" | "complete" | "error";
  progress: number;
  message?: string;
}

export interface GuestMigrateRequest {
  userId: number;
}

export interface GuestMigrateResponse {
  migrated: boolean;
  recordId: number | null;
  questionSetId: number | null;
  status: string;
}
