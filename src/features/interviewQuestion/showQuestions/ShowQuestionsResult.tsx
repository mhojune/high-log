import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import * as S from "@/features/interviewQuestion/showQuestions/ShowQuestions.styles";
import QuestionCard, { type QuestionCardProps } from "@/components/card/QuestionCard";
import LoadingCard from "@/components/card/LoadingCard";
import Title from "@/components/title/Title";
import { useRecordDetail } from "@/api/record/useRecordDetailApi";
import { useQuestionList } from "@/api/question/useQuestionListApi";
import { useToggleBookmark } from "@/api/bookmark/useBookmarkApi";
import type { Question } from "@/api/question/questionTypes";

const TAB_CONFIG = [
  { category: "성적", label: "교과 성적" },
  { category: "세특", label: "세부능력 및 특기사항" },
  { category: "창체", label: "창의적 체험활동" },
  { category: "행특", label: "행동특성 및 종합의견" },
  { category: "기타", label: "기타" },
] as const;

type TabConfig = (typeof TAB_CONFIG)[number];

const DIFFICULTY_TO_LABEL: Record<string, QuestionCardProps["labelType"]> = {
  기본: "basic",
  심화: "intermediate",
  압박: "advanced",
};

function mapQuestionToCardProps(q: Question): QuestionCardProps {
  const labelType = DIFFICULTY_TO_LABEL[q.difficulty] ?? "basic";
  return {
    labelType,
    text: q.content,
    questionPurposeText: q.purpose,
    answerPointText: q.answerPoints,
    answerText: q.modelAnswer,
    answerCriteriaText: q.evaluationCriteria,
    favoriteType: q.isBookmarked ? "select" : "default",
  };
}

interface ShowState {
  recordId: number;
  title: string;
}

export default function ShowQuestionsResult() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryClient = useQueryClient();
  const state = location.state as ShowState | null;

  const [activeTab, setActiveTab] = useState<TabConfig>(TAB_CONFIG[0]);

  const recordId = state?.recordId;
  const title = state?.title;

  useEffect(() => {
    if (recordId) {
      queryClient.invalidateQueries({ queryKey: ["recordDetail", recordId] });
    }
  }, [recordId, queryClient]);

  const { data: recordDetail, isLoading: isRecordLoading } = useRecordDetail(
    recordId ?? 0
  );

  const setId = useMemo(() => {
    if (!recordDetail?.questionSets || !title) {
      console.log("[setId 매칭] 실패 - 조건 미충족", {
        hasRecordDetail: !!recordDetail,
        questionSets: recordDetail?.questionSets,
        title,
      });
      return undefined;
    }
    const questionSets = recordDetail.questionSets;
    const matched = questionSets.find((qs) => qs.title === title);
    const fallback = questionSets.at(-1);
    const resolvedSetId = matched?.id ?? fallback?.id;

    console.log("[setId 매칭]", {
      검색_title: title,
      questionSets_목록: questionSets.map((qs) => ({ id: qs.id, title: qs.title })),
      title_일치: !!matched,
      matched_questionSet: matched ?? null,
      fallback_마지막항목: fallback ?? null,
      최종_setId: resolvedSetId,
    });

    return resolvedSetId;
  }, [recordDetail, title]);

  const {
    data: questions = [],
    isLoading: isQuestionsLoading,
  } = useQuestionList(setId); // category 제외 - 전체 조회 (디버깅용)

  const toggleBookmark = useToggleBookmark(setId, activeTab.category);

  useEffect(() => {
    if (!recordId || !title) {
      navigate("/question");
    }
  }, [recordId, title, navigate]);

  const filteredByCategory = questions.filter(
    (q) => q.category === activeTab.category
  );
  const displayQuestions = filteredByCategory.slice(0, 4);
  const cardPropsList = displayQuestions.map(mapQuestionToCardProps);
  const isLoading =
    isRecordLoading || !setId || (!!setId && isQuestionsLoading);

  console.log("[질문 결과 페이지]", {
    recordId,
    title,
    setId,
    activeTab: activeTab.category,
    recordDetail: recordDetail?.questionSets,
    questionsCount: questions.length,
    displayQuestionsCount: displayQuestions.length,
    isRecordLoading,
    isQuestionsLoading,
    isLoading,
  });

  if (!recordId || !title) {
    return null;
  }

  return (
    <>
      <S.HeaderSection>
        <S.TitleWrapper>
          <Title text="질문 생성" />
        </S.TitleWrapper>
        <S.Description>
          하이로그의 면접 예상 질문은 대입 전형용 생활기록부를 기반으로
        </S.Description>
        <S.Description>
          총 5개 영역(성적, 세특, 창체, 행특, 기타)의 예상 질문을 받아볼 수 있어요
        </S.Description>
      </S.HeaderSection>
      <S.TabContainer>
        {TAB_CONFIG.map((tab) => (
          <S.TabItem
            key={tab.category}
            $isActive={activeTab.category === tab.category}
            onClick={() => setActiveTab(tab)}
          >
            {tab.label}
          </S.TabItem>
        ))}
      </S.TabContainer>
      <S.QuestionList key={activeTab.category}>
        {isLoading ? (
          <>
            <S.QuestionCardWrapper>
              <LoadingCard />
            </S.QuestionCardWrapper>
            <S.QuestionCardWrapper>
              <LoadingCard />
            </S.QuestionCardWrapper>
            <S.QuestionCardWrapper>
              <LoadingCard />
            </S.QuestionCardWrapper>
            <S.QuestionCardWrapper>
              <LoadingCard />
            </S.QuestionCardWrapper>
          </>
        ) : (
          cardPropsList.map((props, i) => {
            const q = displayQuestions[i];
            return (
              <S.QuestionCardWrapper
                key={q ? `${q.questionId}-${i}` : `question-${i}`}
              >
                <QuestionCard
                  {...props}
                  onFavoriteClick={() =>
                    q && toggleBookmark.mutate(q.questionId)
                  }
                />
              </S.QuestionCardWrapper>
            );
          })
        )}
      </S.QuestionList>
    </>
  );
}
