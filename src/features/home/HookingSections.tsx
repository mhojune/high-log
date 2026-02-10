import * as S from "@/features/home/HookingSection.styles"

export default function HookingSection() {
    return (
        <S.HookingSectionContainer>
            <S.HookingTextWrapper>
                <S.HookingTextBox>
                    <S.HookingTextMain>{"\"면접 준비,\n어디서부터 시작해야 할지 모르겠어요\""}</S.HookingTextMain>
                    <S.HookingTextSubBox>
                        <S.HookingTextSub>면접 준비, 어떻게 해야할지 늘 고민하셨나요?</S.HookingTextSub>
                        <S.HookingTextSub>생기부 기반 
                            <S.HookingTextSubBold> AI 질문 생성</S.HookingTextSubBold>
                            으로 체계적인 면접 준비를 시작해 보세요
                        </S.HookingTextSub>
                    </S.HookingTextSubBox>
                </S.HookingTextBox>
            </S.HookingTextWrapper>
        </S.HookingSectionContainer>
    )
}