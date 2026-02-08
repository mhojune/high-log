import * as S from "@/components/tab/Tab.styles";

interface TabProps {
  activeTab: "login" | "signup";
  onTabChange: (tab: "login" | "signup") => void;
}

export default function Tab({ activeTab, onTabChange }: TabProps) {
  return (
    <S.TabContainer>
      <S.TabItem isActive={activeTab === "login"} onClick={() => onTabChange("login")}>
        로그인
      </S.TabItem>
      <S.TabItem isActive={activeTab === "signup"} onClick={() => onTabChange("signup")}>
        회원가입
      </S.TabItem>
    </S.TabContainer>
  );
}
