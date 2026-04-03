export const MY_PAGE_TITLE = "마이페이지";

export const WITHDRAW_ACCOUNT_PAGE_TITLE = "회원 탈퇴";

export const WITHDRAW_ACCOUNT_HEADING = "정말로 회원 탈퇴를 진행하시겠어요?";

export const WITHDRAW_ACCOUNT_REASON_HEADING = "회원 탈퇴 사유를 작성해 주세요.";

export const WITHDRAW_ACCOUNT_CONFIRM_LABEL =
  "안내 사항을 모두 확인했으며, 회원 탈퇴에 동의합니다.";

export const WITHDRAW_ACCOUNT_CANCEL_BUTTON_TEXT = "취소";
export const WITHDRAW_ACCOUNT_SUBMIT_BUTTON_TEXT = "회원탈퇴 하기";

export const WITHDRAW_ACCOUNT_DESCRIPTION_ITEMS: string[] = [
  "회원 탈퇴 시 모든 계정 정보와 데이터는 즉시 삭제됩니다.",
  "작성한 생기부, 면접 질문 및 연습 기록은 복구할 수 없습니다.",
  "동일한 이메일로 재가입 시 일정 기간(7일) 제한이 있을 수 있습니다.",
  "탈퇴 후에는 서비스 이용 및 기록 조회가 불가능합니다.",
];

export type MyPageTabId = "dashboard" | "account";

export const MY_PAGE_TABS: { id: MyPageTabId; label: string }[] = [
  { id: "dashboard", label: "대시보드" },
  { id: "account", label: "계정 정보" },
];

/** 대시보드 이용 현황 카드 라벨 (값은 API 순서: 북마크 수 → 세션 수 → 평균) */
export const USAGE_ANALYSIS_LABELS: { id: string; label: string }[] = [
  { id: "1", label: "내 질문 보관함 문항 수" },
  { id: "2", label: "이번 주 연습 세션" },
  { id: "3", label: "최근 평균 답변 시간" },
];
