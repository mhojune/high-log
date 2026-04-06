export interface FaqItem {
  id: number;
  category: string;
  question: string;
  answer: string;
  displayOrder: number;
  createdAt: string;
}

export interface FaqResponse {
  faqs: FaqItem[];
  currentPage: number;
  totalPages: number;
  totalElements: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface FaqRequestParams {
  category?: string;
  page?: number;
  size?: number;
}
