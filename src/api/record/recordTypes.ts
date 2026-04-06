export interface RecordItem {
  id: number;
  title: string;
}

export interface RecordListResponse {
  records: RecordItem[];
  totalPages: number;
  currentPage: number;
  totalCount: number;
}

export interface RecordUploadResponse {
  presignedUrl: string;
  s3Key: string;
  expiresIn: number;
}

export interface CreateRecordRequest {
  title: string;
  filename: string;
  s3Key: string;
}

export interface RegisterRecordSSEEvent {
  type: "processing" | "complete" | "error";
  progress: number;
  message?: string;
}

export interface QuestionSet {
  id: number;
  title: string;
}

export interface RecordDetail {
  id: number;
  title: string;
  status: "READY" | "PROCESSING" | "FAILED";
  filename: string;
  createdAt: string;
  questionSets: QuestionSet[];
}
