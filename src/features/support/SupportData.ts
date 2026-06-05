export interface SupportItem {
  id: number;
  title: string;
  createdAt: string;
  content: string;
}

export interface SupportListProps {
  supportList: SupportItem[];
  handleListClick: (id: number) => void;
}

export const DUMMY_SUPPORT: SupportItem[] = Array.from(
  { length: 21 },
  (_, i) => {
    const id = 21 - i;
    const isNotice = i % 3 === 0;

    return {
      id,
      title: isNotice
        ? `[공지] 서비스 정기 점검 안내 (${id})`
        : `하이면접 서비스 이용 약관 개정 안내 (${id})`,
      createdAt: "2026-02-27",
      content: isNotice
        ? `안녕하세요. 하이면접입니다.\n\n더욱 안정적인 서비스 제공을 위해 시스템 정기 점검이 진행될 예정입니다.\n\n[점검 상세 안내]\n- 일시: 2026년 3월 5일 00:00 ~ 06:00\n- 영향: 서비스 이용 일시 중단\n\n이용에 불편을 드려 죄송합니다.`
        : `안녕하세요. 하이면접팀입니다.\n\n하이면접을 사랑해주시는 회원님들께 감사드리며, 새로운 서비스 운영 정책에 따라 이용 약관이 일부 개정됨을 안내드립니다.\n\n주요 개정 사항은 마이페이지 공지사항에서 확인하실 수 있습니다.\n감사합니다.`,
    };
  },
);
