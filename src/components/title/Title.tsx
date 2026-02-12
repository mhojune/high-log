import * as S from "@/components/title/Title.styles"

interface TitleProps {
    text: string
}

export default function Title({text}:TitleProps) {
    return (
        <S.TitleContainer>
            <S.Quote />
            <S.Title>{text}</S.Title>
        </S.TitleContainer>
    )
}