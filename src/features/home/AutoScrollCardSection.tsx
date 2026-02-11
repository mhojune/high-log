import * as S from "@/features/home/AutoScrollCardSection.styles"
import { REVIEW_CARDS } from "@/constants/home";

export default function AutoScrollCardSection() {
    return (
        <S.AutoScrollCardSectionConatiner>
            <S.MainWrapper>
                <S.MainTitle>생생한 체험 후기</S.MainTitle>
                <S.ScrollContainer>
                    <S.AnimationCard>
                        {[...REVIEW_CARDS, ...REVIEW_CARDS].map((item, index) => (
                        item.id % 2 === 1 ? (
                            <S.CardImg key={`card-${index}`}>
                                <S.CardTextImg>{item.text}</S.CardTextImg>
                                <S.CardFromTextImg>{item.from}</S.CardFromTextImg>
                            </S.CardImg>
                        ) : (
                            <S.CardNoneImg key={`card-${index}`}>
                                <S.CardTextNoneImg>{item.text}</S.CardTextNoneImg>
                                <S.CardFromTextNoneImg>{item.from}</S.CardFromTextNoneImg>
                            </S.CardNoneImg>
                        )
                        ))}
                    </S.AnimationCard>
                </S.ScrollContainer>
            </S.MainWrapper>
        </S.AutoScrollCardSectionConatiner>
    )
}