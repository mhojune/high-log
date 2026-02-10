import * as S from "@/features/home/DifferentSection.styles"
import POLYGON from "@/assets/icons/polygon.svg?react"
import { BEFORE_CARDS, AFTER_CARDS } from "@/constants/home";

export default function DifferentSection() {
    return (
        <S.DifferentSectionContainer>
            <S.MainTitle>{`다른 면접 준비와 뭐가 다른가요?
`}<S.MainTitleBlue>하이로그만</S.MainTitleBlue>의 특별함</S.MainTitle>
            <S.DifferentWrapper>
                <S.BeforeBox>
                    <S.BeforeText>
                        기존 면접 준비
                    </S.BeforeText>
                    <S.BeforeCardBox>
                        {BEFORE_CARDS.map((card, index) => (
                            <S.BeforeCard key={index}>
                                <S.BeforeCardText>{card.title}</S.BeforeCardText>
                                <S.BeforeCardTextSub>{card.sub}</S.BeforeCardTextSub>
                            </S.BeforeCard>
                        ))}
                    </S.BeforeCardBox>
                </S.BeforeBox>
                
                <S.PolygonBox>
                    {Array.from({ length: 4 }).map((_, index) => (
                        <POLYGON key={index} width={20} height={23} />
                    ))}
                </S.PolygonBox>

                <S.AfterBox>
                    <S.AfterTextBox>
                        <S.AfterText>하이로그<S.AfterTextSub>는</S.AfterTextSub></S.AfterText>
                        <S.AfterTextSub>달라요</S.AfterTextSub>
                    </S.AfterTextBox>
                    <S.AfterCardBox>
                        {AFTER_CARDS.map((card, index) => (
                            <S.AfterCard key={index} $color={card.color}>
                                <S.AfterCardText>{card.title}</S.AfterCardText>
                                <S.AfterCardTextSub>{card.sub}</S.AfterCardTextSub>
                            </S.AfterCard>
                        ))}
                    </S.AfterCardBox>
                </S.AfterBox>
            </S.DifferentWrapper>
        </S.DifferentSectionContainer>
    )
}