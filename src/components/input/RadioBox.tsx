import * as S from "@/components/input/RadioBox.styles"

interface RadioBoxProps {
    isChecked: boolean;
    onClick: () => void;
}

export default function RadioBox({isChecked, onClick}:RadioBoxProps)  {
    return (
        <S.RadioBoxContainer onClick={onClick}>
            {isChecked && <S.RadioBoxBlue/>}
        </S.RadioBoxContainer>
    )
}