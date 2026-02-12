import * as S from "@/components/title/Title.styles"

export default function Title(text:string) {
    return (
        <S.TitleContainer>
            <S.Quote />
            <S.Title>{text}</S.Title>
        </S.TitleContainer>
    )
}