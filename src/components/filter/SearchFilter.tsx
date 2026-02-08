import * as S from "@/components/filter/SearchFilter.styles"
import SearchIcon from "@/assets/icons/search.svg?react"
import XIcon from "@/assets/icons/x.svg?react"

interface SearchFilterProps {
    text: string;
    setText: (text:string) => void;
    placeholder: string;
    onClick: () => void;
}

export default function SearchFilter({text, setText, placeholder, onClick}:SearchFilterProps) {
    return (
        <S.SearchFilterContainer>
            <SearchIcon width={24} height={24} stroke="#737373" onClick={onClick} style={{cursor: "pointer"}}/>
            <S.TitleIconWrap>
                <S.Title value={text} onChange={(e) => setText(e.target.value)} placeholder={placeholder} />
                {text && <XIcon width={24} height={24} stroke="#A3A3A3" onClick={() => {setText("")}} style={{cursor: "pointer"}}/>}
            </S.TitleIconWrap>
        </S.SearchFilterContainer>
    )
}