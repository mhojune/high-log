import { useState } from "react";
import Title from "@/components/title/Title";
import MyPageSidebar from "./MyPageSidebar";
import MyPageMain from "./MyPageMain";
import * as S from "./MyPageLayout.styles";
import { MY_PAGE_TITLE } from "@/constants/myPage";
import type { MyPageTabId } from "@/constants/myPage";

export default function MyPageLayout() {
  const [activeTab, setActiveTab] = useState<MyPageTabId>("dashboard");
  const [showPasswordChange, setShowPasswordChange] = useState(false);

  const handleTabChange = (tab: MyPageTabId) => {
    setActiveTab(tab);
    setShowPasswordChange(false);
  };

  return (
    <S.LayoutWrapper>
      <S.TitleSection>
        <Title text={MY_PAGE_TITLE} />
      </S.TitleSection>
      <S.ContentWrapper>
        <MyPageSidebar activeTab={activeTab} onTabChange={handleTabChange} />
        <MyPageMain
          activeTab={activeTab}
          showPasswordChange={showPasswordChange}
          onNavigateToPasswordChange={() => setShowPasswordChange(true)}
          onClosePasswordChange={() => setShowPasswordChange(false)}
        />
      </S.ContentWrapper>
    </S.LayoutWrapper>
  );
}
