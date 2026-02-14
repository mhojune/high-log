import { useNavigate } from "react-router-dom";
import * as S from "@/features/interviewQuestion/createQuestions/CreateQuestions.styles";
import CreateQuestionFormBox from "@/features/interviewQuestion/createQuestionFormBox/CreateQuestionFormBox";
import Title from "@/components/title/Title";
import type { CreateQuestionFormData } from "@/features/interviewQuestion/types/createQuestion";

interface CreateQuestionsCreateProps {
  onBack: () => void;
}

export default function CreateQuestionsCreate({
  onBack: _onBack,
}: CreateQuestionsCreateProps) {
  const navigate = useNavigate();

  const handleSubmit = (data: CreateQuestionFormData) => {
    console.log("질문 생성 요청:", data);
    navigate("/question/loading");
  };

  return (
    <S.ContentWrapper>
      <S.CreateHeaderSection>
        <S.TitleWrapper>
          <Title text="질문 생성" />
        </S.TitleWrapper>
        <S.Description>
          맞춤형 면접 질문을 위한 지원 정보를 상세하게 입력해주세요
        </S.Description>
      </S.CreateHeaderSection>
      <CreateQuestionFormBox onSubmit={handleSubmit} />
    </S.ContentWrapper>
  );
}
