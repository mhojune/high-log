import * as S from "@/components/input/DefaultInput.styles"
import XIcon from "@/assets/icons/x.svg?react"

interface DefaultInputProps {
    text: string;
    setText: (text:string) => void;
    placeholder: string;
    onClick: () => void;
}

export default function DefaultInput({text, setText, placeholder}:DefaultInputProps) {
    return (
        <S.DefaultInputContainer>
            <S.Title value={text} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setText(e.target.value)} placeholder={placeholder} />
            {text && <XIcon width={24} height={24} stroke="#737373" onClick={() => {setText("")}} style={{cursor: "pointer"}}/>}
        </S.DefaultInputContainer>
    )
}