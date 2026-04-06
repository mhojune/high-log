import * as S from "@/features/support/detail/SupportContent.styles";
import { useParams } from "react-router-dom";
import { useNoticeDetail } from "@/api/notice/useNoticeApi";

export default function SupportContent() {
  const { id } = useParams<{ id: string }>();
  const { data: detailData, isLoading, isError } = useNoticeDetail(Number(id));

  if (isLoading) {
    return <S.SupportContentContainer>로딩 중...</S.SupportContentContainer>;
  }

  if (isError || !detailData) {
    return (
      <S.SupportContentContainer>
        존재하지 않는 게시글이거나 불러올 수 없습니다.
      </S.SupportContentContainer>
    );
  }
  return (
    <S.SupportContentContainer>
      <S.Header>
        <S.TextBox>
          <S.HeaderTitle>{detailData.title}</S.HeaderTitle>
          <S.HeaderDateBox>
            <S.HeaderDateText>작성일</S.HeaderDateText>
            <S.HeaderDateText>{detailData.createdAt.split('T')[0]}</S.HeaderDateText>
          </S.HeaderDateBox>
        </S.TextBox>
      </S.Header>

      <S.ContentBox>
        <S.ContentText>{detailData.content}</S.ContentText>
      </S.ContentBox>
    </S.SupportContentContainer>
  );
}
