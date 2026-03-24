import * as S from "@/pages/interviewQuestions/saveQuestions/saveQuestions.styles";
import Title from "@/components/title/Title";
import SaveQuestionsEmpty from "@/features/interviewQuestion/saveQuestions/SaveQuestionsEmpty";
import SaveQuestionsList from "@/features/interviewQuestion/saveQuestions/SaveQuestionsList";
import LoadingCard from "@/components/card/LoadingCard";
import { useBookmarkList } from "@/api/bookmark/useBookmarkApi";

export default function SaveQuestions() {
  const { data: bookmarks = [], isLoading } = useBookmarkList();

  return (
    <S.Container>
      <S.ContentWrapper>
        <S.CreateHeaderSection>
          <S.TitleWrapper>
            <Title text="질문 보관함" />
          </S.TitleWrapper>
        </S.CreateHeaderSection>
        {isLoading ? (
          <S.LoadingWrapper>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </S.LoadingWrapper>
        ) : bookmarks.length === 0 ? (
          <SaveQuestionsEmpty />
        ) : (
          <SaveQuestionsList bookmarks={bookmarks} />
        )}
      </S.ContentWrapper>
    </S.Container>
  );
}
