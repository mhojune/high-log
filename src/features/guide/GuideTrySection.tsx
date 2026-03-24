import { useNavigate } from "react-router-dom";
import * as S from "./GuideTrySection.styles";
import { DefaultButton } from "@/components/button/Button";
import {
  GUIDE_TRY_TITLE,
  GUIDE_TRY_PRIMARY_BUTTON,
  GUIDE_TRY_SECONDARY_BUTTON,
} from "@/constants/guide";

export default function GuideTrySection() {
  const navigate = useNavigate();

  const handlePrimaryClick = () => {
    navigate("/question");
  };

  const handleSecondaryClick = () => {
    navigate("/question/storage");
  };

  return (
    <S.GuideTrySectionContainer>
      <S.GuideTryTitle>{GUIDE_TRY_TITLE}</S.GuideTryTitle>
      <S.GuideTryButtonGroup>
        <DefaultButton
          width={180}
          type="primary"
          text={GUIDE_TRY_PRIMARY_BUTTON}
          onClick={handlePrimaryClick}
        />
        <DefaultButton
          width={180}
          type="secondary"
          text={GUIDE_TRY_SECONDARY_BUTTON}
          onClick={handleSecondaryClick}
        />
      </S.GuideTryButtonGroup>
    </S.GuideTrySectionContainer>
  );
}
