import { useState, useMemo } from "react";
import * as S from "./DropDown.styles.styles";
import ChevronDown from "@/assets/icons/chevron_down.svg?react";
import ChevronUp from "@/assets/icons/chevron_up.svg?react";

interface DropDownProps {
    width?: string;
    options: string[];
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    isEditable?: boolean;
}

export default function DropDown({
    width = "907px",
    options,
    value,
    setValue,
    placeholder = "Select an option",
    isEditable = false,
}: DropDownProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        if (!isOpen) setIsOpen(true);
    };

    const handleSelect = (option: string) => {
        setValue(option);
        setIsOpen(false);
    };

    const handleIconClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        toggle();
    };

    const handleInputClick = () => {
        if (!isEditable) {
            toggle();
        }
    };

    const filteredOptions = useMemo(() => {
        if (!isEditable) return options;
        return options.filter((opt) => 
            opt.toLowerCase().includes(value.toLowerCase())
        );
    }, [options, value, isEditable]);

    return (
        <S.Container width={width}>
            <S.InputWrapper onClick={handleInputClick}>
                <S.Input
                    value={value}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    readOnly={!isEditable}
                />
                <S.IconWrapper onClick={handleIconClick}>
                    {isOpen ? (
                        <ChevronUp width={24} height={24} stroke="#A3A3A3"/>
                    ) : (
                        <ChevronDown width={24} height={24} stroke="#A3A3A3"/>
                    )}
                </S.IconWrapper>
            </S.InputWrapper>
            {isOpen && (
                <>
                    <S.List>
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <div key={option}>
                                    <S.Line />
                                    <S.ListItem 
                                        onClick={() => handleSelect(option)}
                                    >
                                        {option}
                                    </S.ListItem>
                                </div>
                            ))
                        ) : (
                            <S.ListItem as="div" style={{ cursor: 'default', color: '#737373' }}>
                                해당 학교가 존재하지 않습니다.
                            </S.ListItem>
                        )}
                    </S.List>
                </>
            )}
        </S.Container>
    );
}
