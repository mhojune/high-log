import * as S from "@/components/filter/ListFilter.styles"
import FilterIcon from "@/assets/icons/filter.svg?react"
import XIcon from "@/assets/icons/x.svg?react"
import ChevronDown from "@/assets/icons/chevron_down.svg?react"
import { useState } from "react";
import ListPopUp from "./ListPopUp";

interface ListFilterProps {
    text: string;
    setText: (text:string) => void;
    placeholder: string;
    onClick: () => void;
    fileId?: number;
}

const INITIAL_DATA = [
    {
        fileId: 1,
        fileName: "OO의 생기부"
    },
    {
        fileId: 2,
        fileName: "OO의 생기부"
    },{
        fileId: 3,
        fileName: "OO의 생기부"
    }
    ,{
        fileId: 4,
        fileName: "OO의 생기부"
    },
    {
        fileId: 5,
        fileName: "OO의 생기부"
    },
    {
        fileId: 6,
        fileName: "OO의 생기부"
    },
    {
        fileId: 7,
        fileName: "OO의 생기부"
    }
]

export default function ListFilter({text, setText, placeholder, onClick}:ListFilterProps) {
    const [isShowList, setIsShowList] = useState<boolean>(false)
    const [listData, setListData] = useState(INITIAL_DATA);
    const isLoading = false; //임시 로딩 스피너

    const handleSelect = (fileName: string) => {
        setText(fileName);
        setIsShowList(false);
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && text.trim() !== '') {
            const newItem = {
                fileId: listData.length + 1, 
                fileName: text
            };
            setListData([newItem, ...listData]);
            setText(''); 
            setIsShowList(true); 
        }
    }

    return (
        <S.ListFilterContainer>
            <FilterIcon width={24} height={24} stroke="#737373" onClick={onClick} style={{cursor: "pointer"}}/>
            <S.TitleIconWrap>
                <S.Title 
                    value={text} 
                    onChange={(e) => setText(e.target.value)} 
                    onKeyDown={handleKeyDown}
                    placeholder={placeholder} 
                />
                {text ? <XIcon width={24} height={24} stroke="#A3A3A3" onClick={() => {setText("")}} style={{cursor: "pointer"}}/> : <ChevronDown width={24} height={24} stroke="#A3A3A3" onClick={() => {setIsShowList(!isShowList)}} style={{cursor:"pointer"}}/>}
            </S.TitleIconWrap>
            {isShowList && (
                <ListPopUp data={listData} onSelect={handleSelect} isLoading={isLoading} />
            )}
        </S.ListFilterContainer>
    )
}