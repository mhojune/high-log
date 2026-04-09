import MyPageDashboard from "./MyPageDashboard";
import MyPageAccount from "./MyPageAccount";
import MyPagePasswordChange from "./MyPagePasswordChange";
import * as S from "./MyPageMain.styles";
import type { MyPageTabId } from "@/constants/myPage";

type MyPageMainProps = {
  activeTab: MyPageTabId;
  showPasswordChange: boolean;
  onNavigateToPasswordChange: () => void;
  onClosePasswordChange: () => void;
};

export default function MyPageMain({
  activeTab,
  showPasswordChange,
  onNavigateToPasswordChange,
  onClosePasswordChange,
}: MyPageMainProps) {
  const showPasswordChangeView = activeTab === "account" && showPasswordChange;

  return (
    <S.MainBox>
      {showPasswordChangeView ? (
        <MyPagePasswordChange onClose={onClosePasswordChange} />
      ) : activeTab === "account" ? (
        <MyPageAccount onNavigateToPasswordChange={onNavigateToPasswordChange} />
      ) : (
        <MyPageDashboard />
      )}
    </S.MainBox>
  );
}
