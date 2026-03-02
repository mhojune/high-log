import * as S from "@/features/support/detail/SupportContent.styles";
import { useParams } from "react-router-dom";
import { DUMMY_SUPPORT } from "@/features/support/SupportData";

export default function SupportContent() {
  const { id } = useParams<{ id: string }>();

  const detailData = DUMMY_SUPPORT.find((item) => item.id === Number(id));
  if (!detailData) {
    return (
      <S.SupportContentContainer>
        존재하지 않는 게시글입니다.
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
            <S.HeaderDateText>{detailData.createdAt}</S.HeaderDateText>
          </S.HeaderDateBox>
        </S.TextBox>
      </S.Header>

      <S.ContentBox>
        <S.ContentText>{detailData.content}</S.ContentText>
      </S.ContentBox>
    </S.SupportContentContainer>
  );
}
