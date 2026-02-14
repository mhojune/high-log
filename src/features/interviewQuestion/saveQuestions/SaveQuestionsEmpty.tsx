import { useNavigate } from "react-router-dom";
import NoArchiveIcon from "@/assets/icons/NoArchive.svg?react";
import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/interviewQuestion/saveQuestions/SaveQuestionsEmpty.styles";

export default function SaveQuestionsEmpty() {
  const navigate = useNavigate();

  return (
    <S.EmptyWrapper>
      <S.IconWrapper>
        <NoArchiveIcon width={100} height={100} />
      </S.IconWrapper>
      <S.EmptyTitle>아직 즐겨찾기 등록된 질문이 없어요</S.EmptyTitle>
      <S.EmptyDescription>
        생기부를 업로드하고 나에게 딱 맞는 질문을 받아보세요
      </S.EmptyDescription>
      <S.ButtonWrapper>
        <DefaultButton
          width={181}
          type="primary"
          text="질문 생성하러 가기"
          onClick={() => navigate("/question")}
        />
      </S.ButtonWrapper>
    </S.EmptyWrapper>
  );
}
