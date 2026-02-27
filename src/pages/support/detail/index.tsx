import Title from "@/components/title/Title";
import * as S from "@/pages/support/Support.styles";
import { useNavigate } from "react-router-dom";
import { DefaultButton } from "@/components/button/Button";
import SupportContent from "@/features/support/detail/SupportContent";

export default function SupportDetail() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/support`);
  };

  return (
    <S.SupportContainer>
      <S.SupportWrapper>
        <Title text="공지사항" />
        <SupportContent />
        <DefaultButton
          width={174}
          type="secondary"
          text="목록"
          onClick={handleClick}
        />
      </S.SupportWrapper>
    </S.SupportContainer>
  );
}
