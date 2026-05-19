import { useEffect, useMemo, useState } from "react";
import * as OB from "@/features/onboard/step5-questions/OnboardShowQuestions.styles";
import SignUpPrompt from "@/features/onboard/step5-questions/SignUpPrompt";
import OnboardBlurredQuestionCard from "@/features/onboard/step5-questions/OnboardBlurredQuestionCard";
import QuestionCard, { type QuestionCardProps } from "@/components/card/QuestionCard";
import LoadingCard from "@/components/card/LoadingCard";
import { parseApiError } from "@/api/client";
import { getGuestQuestions } from "@/api/guest/guestApi";
import type { GuestQuestion } from "@/api/guest/guestTypes";

const TAB_CONFIG = [
  { category: "성적" as const, label: "교과 성적" },
  { category: "세특" as const, label: "세부능력 및 특기사항" },
  { category: "창체" as const, label: "창의적 체험활동" },
  { category: "행특" as const, label: "행동특성 및 종합의견" },
  { category: "기타" as const, label: "기타" },
] as const;

type TabConfig = (typeof TAB_CONFIG)[number];

const TARGET_CATEGORY = "세특";
const MAX_VISIBLE_QUESTIONS = 3;

const DIFFICULTY_TO_LABEL: Record<string, QuestionCardProps["labelType"]> = {
  기본: "basic",
  심화: "intermediate",
  압박: "advanced",
};

function mapQuestionToCardProps(q: GuestQuestion): QuestionCardProps {
  const labelType = DIFFICULTY_TO_LABEL[q.difficulty] ?? "basic";
  return {
    labelType,
    text: q.content,
    questionPurposeText: q.purpose,
    answerPointText: q.answerPoints,
    answerText: q.modelAnswer,
    answerCriteriaText: q.evaluationCriteria,
    // 게스트 질문은 임시 ID이며 북마크 저장 API가 없어 보기 전용으로 처리합니다.
    favoriteType: "default",
  };
}

export default function OnboardShowQuestions() {
  const [activeTab, setActiveTab] = useState<TabConfig>(TAB_CONFIG[1]);
  const [questions, setQuestions] = useState<GuestQuestion[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (activeTab.category !== TARGET_CATEGORY) {
      setQuestions([]);
      setErrorMessage("");
      setIsLoading(false);
      return;
    }

    const fetchQuestions = async () => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const result = await getGuestQuestions({ category: TARGET_CATEGORY });
        setQuestions(result.slice(0, MAX_VISIBLE_QUESTIONS));
      } catch (error) {
        const { message } = parseApiError(error);
        setQuestions([]);
        setErrorMessage(message || "질문을 불러오지 못했습니다.");
      } finally {
        setIsLoading(false);
      }
    };
    void fetchQuestions();
  }, [activeTab.category]);

  const cardPropsList = useMemo(() => questions.map(mapQuestionToCardProps), [questions]);

  return (
    <>
      <OB.HeadlineSection>
        <OB.Title>
          나만의 <OB.Highlight>면접 질문</OB.Highlight>이 준비됐어요
        </OB.Title>
        <OB.Subtitle>회원가입 후 더 많은 기능을 사용해 보세요</OB.Subtitle>
      </OB.HeadlineSection>
      <OB.QuestionResultBlock>
        <OB.OnboardTabContainer>
          {TAB_CONFIG.map((tab) => (
            <OB.TabItem
              key={tab.category}
              type="button"
              $isActive={activeTab.category === tab.category}
              onClick={() => setActiveTab(tab)}
            >
              {tab.label}
            </OB.TabItem>
          ))}
        </OB.OnboardTabContainer>
        <OB.QuestionList key={`${activeTab.category}-clear`}>
          {isLoading ? (
            <>
              <OB.QuestionCardWrapper>
                <LoadingCard />
              </OB.QuestionCardWrapper>
              <OB.QuestionCardWrapper>
                <LoadingCard />
              </OB.QuestionCardWrapper>
              <OB.QuestionCardWrapper>
                <LoadingCard />
              </OB.QuestionCardWrapper>
            </>
          ) : (
            cardPropsList.map((props, i) => {
              const q = questions[i];
              return (
                <OB.QuestionCardWrapper key={q ? `${q.questionId}-${i}` : `guest-${i}`}>
                  <QuestionCard {...props} onFavoriteClick={() => {}} />
                </OB.QuestionCardWrapper>
              );
            })
          )}
        </OB.QuestionList>
        {errorMessage ? <OB.Subtitle>{errorMessage}</OB.Subtitle> : null}
        <SignUpPrompt />
        <OB.BlurQuestionList key={`${activeTab.category}-blur`}>
          <OB.QuestionCardWrapper key="onboard-blur-preview-only">
            <OnboardBlurredQuestionCard onFavoriteClick={() => {}} />
          </OB.QuestionCardWrapper>
        </OB.BlurQuestionList>
      </OB.QuestionResultBlock>
    </>
  );
}
