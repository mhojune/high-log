import { useState, useMemo } from "react";
import * as S from "@/features/interviewQuestion/saveQuestions/SaveQuestionsList.styles";
import QuestionCard, { type QuestionCardProps } from "@/components/card/QuestionCard";
import ListFilter from "@/components/filter/ListFilter";
import Pagination from "@/components/common/pagination/Pagination";

const PAGE_SIZE = 6;

const MOCK_QUESTIONS: Array<QuestionCardProps> = [
  {
    labelType: "basic",
    text: "출결 상황에 대해 설명해주세요",
    questionPurposeText: "출결 태도 파악",
    answerPointText: "지각/결석 사유, 개선 노력",
    favoriteType: "select",
  },
  {
    labelType: "intermediate",
    text: "수학 성적 변동에 대해 설명해주세요",
    questionPurposeText: "학습 태도 파악",
    answerPointText: "원인 분석, 구체적 노력, 결과",
    answerText:
      "수학 성적이 낮았던 이유를 분석해 보니 개념 이해가 부족했습니다. 매일 1시간씩 기초 개념을 복습하고, 오답 노트를 작성하며 약점을 보완했어요.",
    answerCriteriaText:
      "① 구체적인 어려움이 무엇이었는지 ② 어떤 방법으로 극복했는지 ③ 그 결과가 어떠했는지가 담겨 있는지 확인하세요.",
    favoriteType: "select",
  },
  {
    labelType: "basic",
    text: "교과 성적에서 가장 어려웠던 과목은?",
    questionPurposeText: "학습 태도 파악",
    answerPointText: "어려움, 극복 노력",
    favoriteType: "select",
  },
  {
    labelType: "advanced",
    text: "세부능력 및 특기사항에서 배운 점은?",
    questionPurposeText: "역량 파악",
    answerPointText: "경험 기반 성장",
    favoriteType: "select",
  },
  {
    labelType: "good",
    text: "창의적 체험활동 경험을 공유해주세요",
    questionPurposeText: "활동 경험 파악",
    answerPointText: "역할, 배운 점",
    favoriteType: "select",
  },
  {
    labelType: "normal",
    text: "행동특성 및 종합의견에 대한 소감은?",
    questionPurposeText: "자아 인식 파악",
    answerPointText: "성장 과정, 반성",
    favoriteType: "select",
  },
  {
    labelType: "basic",
    text: "발표를 준비하면서 가장 어려웠던 점은?",
    questionPurposeText: "문제해결 과정 확인",
    answerPointText: "자료 조사, 해석의 어려움",
    favoriteType: "select",
  },
  {
    labelType: "intermediate",
    text: "학업에서 겪은 어려움과 극복 과정은?",
    questionPurposeText: "회복탄력성 파악",
    answerPointText: "어려움, 극복 방법",
    favoriteType: "select",
  },
];

export default function SaveQuestionsList() {
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const questions = MOCK_QUESTIONS;
  const totalCount = questions.length;

  const { paginatedQuestions, totalPages } = useMemo(() => {
    const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const paginatedQuestions = questions.slice(startIndex, startIndex + PAGE_SIZE);
    return { paginatedQuestions, totalPages };
  }, [questions, currentPage, totalCount]);

  return (
    <>
      <S.HeaderBar>
        <S.TotalCount>총 {totalCount}개</S.TotalCount>
        <ListFilter
          text={filterText}
          setText={setFilterText}
          placeholder="생기부를 선택해 주세요"
          onClick={() => {}}
        />
      </S.HeaderBar>
      <S.QuestionList>
        {paginatedQuestions.map((q, i) => (
          <S.QuestionCardWrapper key={(currentPage - 1) * PAGE_SIZE + i}>
            <QuestionCard {...q} />
          </S.QuestionCardWrapper>
        ))}
      </S.QuestionList>
      <S.PaginationWrapper>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </S.PaginationWrapper>
    </>
  );
}
