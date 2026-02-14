import * as S from "@/pages/interviewQuestions/saveQuestions/saveQuestions.styles";
import Title from "@/components/title/Title";
import SaveQuestionsEmpty from "@/features/interviewQuestion/saveQuestions/SaveQuestionsEmpty";
import SaveQuestionsList from "@/features/interviewQuestion/saveQuestions/SaveQuestionsList";

export default function SaveQuestions() {
  const hasQuestions = true; // TODO: 저장된 질문 여부에 따라 결정

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.CreateHeaderSection>
          <S.TitleWrapper>
            <Title text="질문 보관함" />
          </S.TitleWrapper>
        </S.CreateHeaderSection>
        {hasQuestions ? <SaveQuestionsList /> : <SaveQuestionsEmpty />}
      </S.ContentWrapper>
    </S.Container>
  );
}
