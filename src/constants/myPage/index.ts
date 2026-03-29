export const MY_PAGE_TITLE = "마이페이지";

export type MyPageTabId = "dashboard" | "account" | "settings";

export const MY_PAGE_TABS: { id: MyPageTabId; label: string }[] = [
  { id: "dashboard", label: "대시보드" },
  { id: "account", label: "계정 정보" },
  { id: "settings", label: "설정" },
];

/** 대시보드 이용 현황 카드 라벨 (값은 API 순서: 북마크 수 → 세션 수 → 평균) */
export const USAGE_ANALYSIS_LABELS: { id: string; label: string }[] = [
  { id: "1", label: "내 질문 보관함 문항 수" },
  { id: "2", label: "이번 주 연습 세션" },
  { id: "3", label: "최근 평균 답변 시간" },
];

export const EVALUATION_ITEMS: {
  id: string;
  title: string;
  description: string;
  status: string;
}[] = [
  {
    id: "1",
    title: "세특 기반 질문 세트 · 5문항",
    description: "오늘 10:20 · 소요시간 9:42 · 체크리스트 3/4",
    status: "복습필요",
  },
  {
    id: "2",
    title: "즐겨찾기 질문 빠른 연습 · 3문항",
    description: "어제 22:05 · 소요시간 10:05 · 체크리스트 4/4",
    status: "양호",
  },
];

export const SETTINGS_ITEMS: { id: string; title: string; description: string }[] = [
  { id: "1", title: "답변 자동 저장", description: "연습 중 작성한 답변 자동 임시저장" },
];
