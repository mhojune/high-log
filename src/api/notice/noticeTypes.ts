export interface NoticeItem {
  id: number;
  title: string;
  content: string;
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NoticeResponse {
  notices: NoticeItem[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface NoticeRequestParams {
  page?: number;
  size?: number;
}
