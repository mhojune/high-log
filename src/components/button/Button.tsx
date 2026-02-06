import * as S from "@/components/button/Button.styles"

interface DefaultButtonProps {
    width : number;
    type : "primary" | "secondary" | "disabled";
    text : string;
    onClick? : () => void;
}

function DefaultButton({width, type, text, onClick} : DefaultButtonProps) {
    return (
    <S.DefaultButtonContainer onClick={onClick} type={type} width={width} disabled={type==="disabled"}>
        <S.ButtonText type={type}>
            {text}
        </S.ButtonText>
    </S.DefaultButtonContainer>
    )
}

interface UnderBarButtonProps {
    text : string;
    onClick? : () => void;
}

function UnderBarButton({text, onClick} : UnderBarButtonProps) {
    return (
    <S.UnderBarButtonText onClick={onClick}>
        {text}
    </S.UnderBarButtonText>
    )
}

export {DefaultButton, UnderBarButton}