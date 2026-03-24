import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as S from "@/pages/interviewQuestions/loadingQuestions/loadingQuestions.styles";
import QuestionGeneratingLoading from "@/components/loading/QuestionGeneratingLoading";
import LoadingCard from "@/components/card/LoadingCard";
import { useGenerateQuestions } from "@/api/question/useGenerateQuestionsApi";
import type { CreateQuestionFormData } from "@/features/interviewQuestion/types/createQuestion";

export default function LoadingQuestions() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state as CreateQuestionFormData | null;
  const [percent, setPercent] = useState(0);
  const hasNavigatedRef = useRef(false);
  const hasStartedRef = useRef(false);

  const generateQuestions = useGenerateQuestions({
    onSuccess: () => {
      setPercent(100);
    },
    onError: () => {
      navigate("/question");
    },
  });

  const isComplete = percent >= 100;

  useEffect(() => {
    if (!formData?.recordId) {
      navigate("/question");
      return;
    }
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    generateQuestions.mutate({
      recordId: formData.recordId,
      body: {
        title: formData.title,
        target_school: formData.school,
        target_major: formData.department,
        interview_type: formData.applicationType,
      },
      onProgress: setPercent,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData?.recordId]);

  useEffect(() => {
    if (!isComplete || hasNavigatedRef.current || !formData?.recordId) return;
    hasNavigatedRef.current = true;
    navigate("/question/show", {
      state: { recordId: formData.recordId, title: formData.title },
    });
  }, [isComplete, navigate, formData]);

  return (
    <S.Container>
      <S.ContentWrapper>
        <QuestionGeneratingLoading percent={percent} isComplete={isComplete} />
        <S.LoadingCardsWrapper>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </S.LoadingCardsWrapper>
      </S.ContentWrapper>
    </S.Container>
  );
}
