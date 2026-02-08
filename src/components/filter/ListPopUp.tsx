import * as S from "@/components/filter/ListPopUp.styles"
import LoaderIcon from "@/assets/icons/loader_circle.svg?react"
import React from "react";

interface ListPopUpProps {
    data: {
        fileId: number;
        fileName: string;
    }[];
    onSelect: (fileName: string) => void;
    isLoading?: boolean;
}

export default function ListPopUp({ data, onSelect, isLoading }: ListPopUpProps) {
    return (
        <S.ListPopUpContainer>
            {isLoading ? (
                <S.LoaderWrapper>
                    <LoaderIcon width={48} height={48} stroke="#737373" />
                </S.LoaderWrapper>
            ) : (
                data.map((item, index) => (
                    <React.Fragment key={item.fileId}>
                        <S.TitleWrapper onClick={() => onSelect(item.fileName)}>
                            <S.Title>{item.fileName}</S.Title>
                        </S.TitleWrapper>
                        {index < data.length - 1 && <S.Line />}
                    </React.Fragment>
                ))
            )}
        </S.ListPopUpContainer>
    )
}