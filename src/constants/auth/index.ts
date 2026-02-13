export const AUTH_DESCRIPTION = {
  headings: ["내 생기부로 면접 질문을 만들고", "연습까지 한번에"],
  sampleButtonText: "샘플 결과 보기",
} as const;

export interface AuthFeatureBlock {
  title: string;
  description: string;
}

export interface SignUpAgreementItem {
  key: "이용약관" | "개인정보처리방침" | "만14세이상";
  label: string;
  buttonText?: string;
  buttonPath?: string;
}

export const SIGN_UP_AGREEMENT_ITEMS: SignUpAgreementItem[] = [
  { key: "이용약관", label: "(필수) 이용약관 동의", buttonText: "약관 보기", buttonPath: "/term" },
  { key: "개인정보처리방침", label: "(필수) 개인정보 처리방침 동의", buttonText: "정책 보기", buttonPath: "/privacy" },
  { key: "만14세이상", label: "(필수) 만 14세 이상입니다." },
];

export const AUTH_FEATURE_BLOCKS: AuthFeatureBlock[] = [
  {
    title: "질문 자동 생성",
    description: "세특/창체/동아리/진로/독서/수상에서 2~5개 질문 묶음 생성",
  },
  {
    title: "답변 포인트 제공",
    description: "STAR 구조 + 근거/수치화 기준으로 답변 방향을 제시",
  },
  {
    title: "면접 연습 기록",
    description: "세션별 평균 시간/구조 점수/복습 포인트를 저장",
  },
];
