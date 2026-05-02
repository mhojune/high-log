import { useMemo, useState } from "react";
import * as OB from "@/features/onboard/step5-questions/OnboardShowQuestions.styles";
import SignUpPrompt from "@/features/onboard/step5-questions/SignUpPrompt";
import OnboardBlurredQuestionCard from "@/features/onboard/step5-questions/OnboardBlurredQuestionCard";
import QuestionCard, { type QuestionCardProps } from "@/components/card/QuestionCard";
import {
  ONBOARD_STUB_QUESTIONS,
  type OnboardStubQuestion,
} from "@/constants/onboard/onboardStubQuestions";

const TAB_CONFIG = [
  { category: "성적" as const, label: "교과 성적" },
  { category: "세특" as const, label: "세부능력 및 특기사항" },
  { category: "창체" as const, label: "창의적 체험활동" },
  { category: "행특" as const, label: "행동특성 및 종합의견" },
  { category: "기타" as const, label: "기타" },
] as const;

type TabConfig = (typeof TAB_CONFIG)[number];

const DIFFICULTY_TO_LABEL: Record<string, QuestionCardProps["labelType"]> = {
  기본: "basic",
  심화: "intermediate",
  압박: "advanced",
};

function mapStubToCardProps(q: OnboardStubQuestion): QuestionCardProps {
  const labelType = DIFFICULTY_TO_LABEL[q.difficulty] ?? "basic";
  return {
    labelType,
    text: q.content,
    questionPurposeText: q.purpose,
    answerPointText: q.answerPoints,
    answerText: q.modelAnswer,
    answerCriteriaText: q.evaluationCriteria,
    favoriteType: "default",
  };
}

/** 온보딩 최종 단계 — 세특 탭만 스텁 명시 카드 노출, 그 외 탭은 블러 예시만 */
export default function OnboardShowQuestions() {
  const [activeTab, setActiveTab] = useState<TabConfig>(TAB_CONFIG[1]);
  const isDetailTab = activeTab.category === "세특";

  const filtered = useMemo(
    () => ONBOARD_STUB_QUESTIONS.filter((q) => q.category === activeTab.category),
    [activeTab.category],
  );
  const cardPropsList = useMemo(() => filtered.map(mapStubToCardProps), [filtered]);

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
        {isDetailTab ? (
          <OB.QuestionList key={`${activeTab.category}-clear`}>
            {cardPropsList.map((props, i) => {
              const q = filtered[i];
              return (
                <OB.QuestionCardWrapper key={q ? `${q.questionId}-${i}` : `stub-${i}`}>
                  <QuestionCard {...props} onFavoriteClick={() => {}} />
                </OB.QuestionCardWrapper>
              );
            })}
          </OB.QuestionList>
        ) : null}
        <SignUpPrompt />
        <OB.BlurQuestionList key={`${activeTab.category}-blur`}>
          {isDetailTab && filtered.length > 0 ? (
            <OB.QuestionCardWrapper key="onboard-unified-blur-teaser">
              <OnboardBlurredQuestionCard onFavoriteClick={() => {}} />
            </OB.QuestionCardWrapper>
          ) : null}
          {!isDetailTab ? (
            <OB.QuestionCardWrapper key="onboard-blur-preview-only">
              <OnboardBlurredQuestionCard onFavoriteClick={() => {}} />
            </OB.QuestionCardWrapper>
          ) : null}
        </OB.BlurQuestionList>
      </OB.QuestionResultBlock>
    </>
  );
}
