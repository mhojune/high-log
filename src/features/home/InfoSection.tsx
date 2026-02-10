import * as S from "@/features/home/InfoSection.styles"
import PIN from "@/assets/images/pin.png"

export default function InfoSection() {
    return (
        <S.InfoSectionContainer>
            <S.IconTitleWrapper>
                <S.IconBox>
                    <S.Icon src={PIN} />
                </S.IconBox>
                <S.TitleBox>
                    <S.Title>생기부 업로드 한 번으로 끝,</S.Title>
                    <S.Title>똑똑한 면접 준비를 시작해보세요</S.Title>
                </S.TitleBox>
            </S.IconTitleWrapper>
        </S.InfoSectionContainer>
    )
}