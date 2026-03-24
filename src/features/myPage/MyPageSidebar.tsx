import { useAuth } from "@/contexts/AuthContext";
import ChevronRight from "@/assets/icons/chevron_right.svg?react";
import * as S from "./MyPageSidebar.styles";
import { MY_PAGE_TABS } from "@/constants/myPage";
import type { MyPageTabId } from "@/constants/myPage";

function formatJoinDate(dateStr: string | undefined): string {
  if (!dateStr) return "-";
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

type MyPageSidebarProps = {
  activeTab: MyPageTabId;
  onTabChange: (tab: MyPageTabId) => void;
};

export default function MyPageSidebar({ activeTab, onTabChange }: MyPageSidebarProps) {
  const { user, logout } = useAuth();
  const joinDate = user?.createdAt;

  const handleWithdraw = () => {
    // TODO: 회원 탈퇴 구현
  };

  return (
    <S.SidebarBox>
      <S.SidebarUserSection>
        <S.SidebarUserRow>
          <S.SidebarUserAvatar />
          <S.SidebarUserInfo>
            <S.SidebarUserName>{user?.name ? `${user.name} 님` : "-"}</S.SidebarUserName>
            <S.SidebarUserJoinDate>가입일: {formatJoinDate(joinDate)}</S.SidebarUserJoinDate>
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
