import { useEffect, useState } from "react";
import LoadingCard from "@/components/card/LoadingCard";
import QuestionGeneratingLoading from "@/components/loading/QuestionGeneratingLoading";
import * as LoadingQuestionsLayout from "@/pages/interviewQuestions/loadingQuestions/loadingQuestions.styles";

/**
 * 온보딩 「내 질문 보기」 로딩 전용 화면 — API 미연결 시 스텁만 사용합니다.
 * 실제 질문 생성 API(`useGenerateQuestions` 등) 연결 시 아래 고정 간격·타이머를 제거하고 mutation + onProgress로 교체하세요.
 */
const ONBOARD_STUB_PROGRESS_TICK_MS = 1000;
const ONBOARD_STUB_PROGRESS_STEP = 20;

interface OnboardQuestionGeneratingProps {
  /** 스텝 완료(100%) 직후 온보딩 마지막 단계로 전환 등 — API 도입 후에는 성공 핸들러로 교체하면 됩니다. */
  onLoadingComplete?: () => void;
}

export default function OnboardQuestionGenerating({
  onLoadingComplete,
}: OnboardQuestionGeneratingProps) {
  const [stubPercent, setStubPercent] = useState(0);
  const [stubComplete, setStubComplete] = useState(false);

  useEffect(() => {
    setStubPercent(0);
    setStubComplete(false);

    let accumulated = 0;
    const intervalId = window.setInterval(() => {
      accumulated = Math.min(100, accumulated + ONBOARD_STUB_PROGRESS_STEP);
      setStubPercent(accumulated);

      if (accumulated >= 100) {
        window.clearInterval(intervalId);
        setStubComplete(true);
      }
    }, ONBOARD_STUB_PROGRESS_TICK_MS);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (!stubComplete || !onLoadingComplete) return;
    onLoadingComplete();
  }, [stubComplete, onLoadingComplete]);

  return (
    <LoadingQuestionsLayout.ContentWrapper>
      <QuestionGeneratingLoading percent={stubPercent} isComplete={stubComplete} />
      <LoadingQuestionsLayout.LoadingCardsWrapper>
        <LoadingCard />
        <LoadingCard />
        <LoadingCard />
      </LoadingQuestionsLayout.LoadingCardsWrapper>
    </LoadingQuestionsLayout.ContentWrapper>
  );
}
