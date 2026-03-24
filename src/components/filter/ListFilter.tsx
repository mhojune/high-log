import * as S from "@/components/filter/ListFilter.styles";
import FilterIcon from "@/assets/icons/filter.svg?react";
import XIcon from "@/assets/icons/x.svg?react";
import ChevronDown from "@/assets/icons/chevron_down.svg?react";
import { useState } from "react";
import ListPopUp from "./ListPopUp";

interface ListFilterProps {
  text: string;
  setText: (text: string) => void;
  placeholder: string;
  onClick?: () => void;
  data?: string[];
  width?: number;
  listWidth?: number;
  listHeight?: number;
}

export default function ListFilter({
  text,
  setText,
  placeholder,
  onClick,
  data = [],
  width,
  listWidth,
  listHeight,
}: ListFilterProps) {
  const [isShowList, setIsShowList] = useState<boolean>(false);
  const isLoading = false;

  const listData = data
    .filter((value) => value.toLowerCase().includes(text.toLowerCase()))
    .map((fileName, index) => ({
      fileId: index + 1,
      fileName,
    }));

  const handleSelect = (fileName: string) => {
    setText(fileName);
    setIsShowList(false);
  };

  return (
    <S.ListFilterContainer $width={width}>
      <FilterIcon
        width={24}
        height={24}
        stroke="#737373"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
      <S.TitleIconWrap>
        <S.Title
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsShowList(true)}
          placeholder={placeholder}
        />
        {text ? (
          <XIcon
            width={24}
            height={24}
            stroke="#A3A3A3"
            onClick={() => {
              setText("");
            }}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <ChevronDown
            width={24}
            height={24}
            stroke="#A3A3A3"
            onClick={() => {
              setIsShowList(!isShowList);
            }}
            style={{ cursor: "pointer" }}
          />
        )}
      </S.TitleIconWrap>
      {isShowList && (
        <ListPopUp
          data={listData}
          onSelect={handleSelect}
          isLoading={isLoading}
          width={listWidth}
          maxHeight={listHeight}
        />
      )}
    </S.ListFilterContainer>
  );
}
