import * as S from "@/features/support/SupportList.styles";
import type {
  SupportItem,
  SupportListProps,
} from "@/features/support/SupportData";

export default function SupportList({
  supportList,
  handleListClick,
}: SupportListProps) {
  return (
    <S.SupportListContainer>
      <S.Header>
        <S.TextBox>
          <S.HeaderText>번호</S.HeaderText>
          <S.HeaderText>제목</S.HeaderText>
          <S.HeaderDate>
            <S.HeaderText>작성일</S.HeaderText>
          </S.HeaderDate>
        </S.TextBox>
      </S.Header>

      {supportList.map((item: SupportItem) => (
        <S.ListBox key={item.id}>
          <S.ListBoxTextWrapper>
            <S.ListBoxTextNumber>
              {String(item.id).padStart(2, "0")}
            </S.ListBoxTextNumber>
            <S.ListBoxTextTitle onClick={() => handleListClick(item.id)}>
              {item.title}
            </S.ListBoxTextTitle>
            <S.ListBoxDate>{item.createdAt}</S.ListBoxDate>
          </S.ListBoxTextWrapper>
        </S.ListBox>
      ))}
    </S.SupportListContainer>
  );
}
