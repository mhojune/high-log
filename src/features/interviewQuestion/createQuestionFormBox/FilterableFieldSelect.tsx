import { useState, useMemo, useEffect } from "react";
import * as S from "@/components/input/DropDown.styles.styles";
import ChevronDown from "@/assets/icons/chevron_down.svg?react";
import ChevronUp from "@/assets/icons/chevron_up.svg?react";

/** 질문 생성 지원 정보용: 상단 입력 필드에서 목록을 검색·필터 (팝업 전용 검색 없음) */
interface FilterableFieldSelectProps {
  width?: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  noResultsMessage?: string;
}

export default function FilterableFieldSelect({
  width = "340px",
  options,
  value,
  setValue,
  placeholder = "",
  disabled = false,
  noResultsMessage = "검색 결과가 없습니다",
}: FilterableFieldSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  const open = () => {
    if (disabled) return;
    setQuery(value);
    setIsOpen(true);
  };

  const toggle = () => {
    if (disabled) return;
    if (isOpen) {
      setIsOpen(false);
    } else {
      open();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isOpen) return;
    setQuery(e.target.value);
  };

  const handleSelect = (option: string) => {
    setValue(option);
    setIsOpen(false);
  };

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggle();
  };

  const handleInputWrapperClick = () => {
    if (!isOpen) open();
  };

  const filteredOptions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((opt) => opt.toLowerCase().includes(q));
  }, [options, query]);

  const inputValue = isOpen ? query : value;

  return (
    <S.Container width={width} $isOpen={isOpen} $disabled={disabled}>
      <S.InputWrapper
        onClick={handleInputWrapperClick}
        style={{ cursor: isOpen ? "text" : "pointer" }}
      >
        <S.Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder={placeholder}
          readOnly={!isOpen}
        />
        <S.IconWrapper onClick={handleIconClick}>
          {isOpen ? (
            <ChevronUp width={24} height={24} stroke="#A3A3A3" />
          ) : (
            <ChevronDown width={24} height={24} stroke="#A3A3A3" />
          )}
        </S.IconWrapper>
      </S.InputWrapper>
      {isOpen && (
        <S.List>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <div key={`${option}-${index}`}>
                <S.Line />
                <S.ListItem onClick={() => handleSelect(option)}>
                  {option}
                </S.ListItem>
              </div>
            ))
          ) : (
            <S.ListItem
              as="div"
              style={{ cursor: "default", color: "#737373" }}
            >
              {noResultsMessage}
            </S.ListItem>
          )}
        </S.List>
      )}
    </S.Container>
  );
}
