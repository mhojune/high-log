import { useState, useMemo, useEffect } from "react";
import * as S from "@/features/interviewQuestion/saveQuestions/SaveQuestionsList.styles";
import QuestionCard, { type QuestionCardProps } from "@/components/card/QuestionCard";
import ListFilter from "@/components/filter/ListFilter";
import Pagination from "@/components/common/pagination/Pagination";
import { useToggleBookmarkFromStorage } from "@/api/bookmark/useBookmarkApi";
import type { BookmarkItem } from "@/api/bookmark/bookmarkTypes";

const PAGE_SIZE = 6;

const DIFFICULTY_TO_LABEL: Record<string, QuestionCardProps["labelType"]> = {
  BASIC: "basic",
  기본: "basic",
  DEEP: "intermediate",
  INTERMEDIATE: "intermediate",
  심화: "intermediate",
  ADVANCED: "advanced",
  압박: "advanced",
  good: "good",
  normal: "normal",
  improve: "improve",
};

function mapBookmarkToCardProps(
  item: BookmarkItem,
  onFavoriteClick?: () => void
): QuestionCardProps {
  const labelType = DIFFICULTY_TO_LABEL[item.difficulty] ?? "basic";
  return {
    labelType,
    text: item.content,
    questionPurposeText: item.purpose,
    answerPointText: item.evaluationCriteria,
    answerText: item.modelAnswer ?? undefined,
    answerCriteriaText: item.evaluationCriteria,
    favoriteType: "select",
    onFavoriteClick,
  };
}

interface SaveQuestionsListProps {
  bookmarks: BookmarkItem[];
}

export default function SaveQuestionsList({ bookmarks }: SaveQuestionsListProps) {
  const [filterText, setFilterText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const toggleBookmark = useToggleBookmarkFromStorage();

  const filteredBookmarks = useMemo(() => {
    if (!filterText.trim()) return bookmarks;
    return bookmarks.filter((b) =>
      b.recordTitle.toLowerCase().includes(filterText.toLowerCase())
    );
  }, [bookmarks, filterText]);

  const totalCount = filteredBookmarks.length;

  useEffect(() => {
    setCurrentPage(1);
  }, [filterText]);

  const { paginatedItems, totalPages } = useMemo(() => {
    const totalPages = Math.ceil(totalCount / PAGE_SIZE) || 1;
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const items = filteredBookmarks.slice(startIndex, startIndex + PAGE_SIZE);
    return { paginatedItems: items, totalPages };
  }, [filteredBookmarks, currentPage, totalCount]);

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
        {paginatedItems.map((item) => {
          const cardProps = mapBookmarkToCardProps(
            item,
            () => toggleBookmark.mutate(item.questionId)
          );
          return (
            <S.QuestionCardWrapper key={item.questionId}>
              <QuestionCard {...cardProps} />
            </S.QuestionCardWrapper>
          );
        })}
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
