import { DefaultButton } from "@/components/button/Button";
import { useNavigate } from "react-router-dom";
import * as S from "@/features/onboard/step5-questions/SignUpPrompt.styles";

const TITLE = "회원가입 후 더 많은 질문을 확인해 보세요";
const DETAIL_LINE_1 = "AI가 분석한 나만의 면접 질문이 준비됐어요.";
const DETAIL_LINE_2 = "확인하고 실전 연습 시작하세요!";

export default function SignUpPrompt() {
  const navigate = useNavigate();
  const titleId = "signup-prompt-title";

  return (
    <S.Wrapper aria-labelledby={titleId}>
      <S.Title id={titleId}>{TITLE}</S.Title>
      <S.DetailStack>
        <S.DetailLine>
          {DETAIL_LINE_1}
          <br />
          {DETAIL_LINE_2}
        </S.DetailLine>
      </S.DetailStack>
      <S.ButtonWrap>
        <DefaultButton
          width={174}
          type="primary"
          text="회원가입 하기"
          onClick={() => navigate("/auth")}
        />
      </S.ButtonWrap>
    </S.Wrapper>
  );
}
