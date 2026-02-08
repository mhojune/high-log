import * as S from "./CheckBox.styles";
import CheckIcon from "@/assets/icons/check.svg?react";

interface CheckBoxProps {
    isChecked: boolean;
    onClick: () => void;
}

export default function CheckBox({ isChecked, onClick }: CheckBoxProps) {
    return (
        <S.Wrapper>
            <S.Container onClick={onClick}>
                <S.Box $isChecked={isChecked}>
                    {isChecked && <CheckIcon />}
                </S.Box>
            </S.Container>
        </S.Wrapper>
    );
}
