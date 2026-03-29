import { useAuth } from "@/contexts/AuthContext";
import ChevronRight from "@/assets/icons/chevron_right.svg?react";
import * as S from "@/features/myPage/MyPageSidebar.styles";
import { MY_PAGE_TABS } from "@/constants/myPage";
import type { MyPageTabId } from "@/constants/myPage";
import { useMyPageDashboard } from "@/api/myPage/useMyPageDashboard";

/** API registDate: YYYYMMDD → YYYY.MM.DD */
function formatRegistDateDot(yyyymmdd: string | undefined): string {
  if (!yyyymmdd || yyyymmdd.length !== 8) return "-";
  return `${yyyymmdd.slice(0, 4)}.${yyyymmdd.slice(4, 6)}.${yyyymmdd.slice(6, 8)}`;
}

type MyPageSidebarProps = {
  activeTab: MyPageTabId;
  onTabChange: (tab: MyPageTabId) => void;
};

export default function MyPageSidebar({ activeTab, onTabChange }: MyPageSidebarProps) {
  const { logout } = useAuth();
  const { data: dashboard, isLoading: isDashboardLoading } = useMyPageDashboard();

  const handleWithdraw = () => {
    // TODO: 회원 탈퇴 구현
  };

  return (
    <S.SidebarBox>
      <S.SidebarUserSection>
        <S.SidebarUserRow>
          <S.SidebarUserAvatar />
          <S.SidebarUserInfo>
            <S.SidebarUserName>
              {isDashboardLoading
                ? "…"
                : dashboard?.userName
                  ? `${dashboard.userName} 님`
                  : "-"}
            </S.SidebarUserName>
            <S.SidebarUserJoinDate>
              가입일:{" "}
              {isDashboardLoading ? "…" : formatRegistDateDot(dashboard?.registDate)}
            </S.SidebarUserJoinDate>
          </S.SidebarUserInfo>
        </S.SidebarUserRow>
      </S.SidebarUserSection>
      <S.SidebarDivider />
      <S.SidebarNavSection>
        {MY_PAGE_TABS.map((tab) => (
          <S.SidebarNavButton
            key={tab.id}
            type="button"
            $active={activeTab === tab.id}
            onClick={() => onTabChange(tab.id)}
          >
            <S.SidebarNavButtonText>{tab.label}</S.SidebarNavButtonText>
            <S.SidebarNavButtonIcon>
              <ChevronRight />
            </S.SidebarNavButtonIcon>
          </S.SidebarNavButton>
        ))}
      </S.SidebarNavSection>
      <S.SidebarActionSection>
        <S.SidebarActionButton type="button" onClick={logout}>
          로그아웃
        </S.SidebarActionButton>
        <S.SidebarWithdrawButton type="button" onClick={handleWithdraw}>
          회원 탈퇴
        </S.SidebarWithdrawButton>
      </S.SidebarActionSection>
    </S.SidebarBox>
  );
}
