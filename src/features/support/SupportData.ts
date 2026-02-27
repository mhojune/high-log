export interface SupportItem {
  id: number;
  title: string;
  createdAt: string;
}

export interface SupportListProps {
  supportList: SupportItem[];
  handleListClick: (id: number) => void;
}

export const DUMMY_SUPPORT: SupportItem[] = Array.from(
  { length: 21 },
  (_, i) => ({
    id: 21 - i,
    title:
      i % 3 === 0
        ? `[공지] 서비스 정기 점검 안내 (${21 - i})`
        : `공지사항 테스트 제목입니다. (${21 - i})`,
    createdAt: "2026-02-27",
  }),
);
