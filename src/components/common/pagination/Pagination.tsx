import * as S from "@/components/common/pagination/Pagination.styles";
import CHEVRON_LEFT from "@/assets/icons/chevron_left.svg?react";
import CHEVRON_RIGHT from "@/assets/icons/chevron_right.svg?react";
import CHEVRONS_LEFT from "@/assets/icons/chevrons_left.svg?react";
import CHEVRONS_RIGHT from "@/assets/icons/chevrons_right.svg?react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    if (totalPages === 0) return null;

    const handleFirstPage = () => onPageChange(1);
    const handleLastPage = () => onPageChange(totalPages);
    const handlePrevPage = () => onPageChange(Math.max(currentPage - 1, 1));
    const handleNextPage = () => onPageChange(Math.min(currentPage + 1, totalPages));

    return (
        <S.PaginationWrapper>
            <S.ArrouButtonBox>
                <S.ArrowButton onClick={handleFirstPage} disabled={currentPage === 1}>
                    <CHEVRONS_LEFT />
                </S.ArrowButton>
                <S.ArrowButton onClick={handlePrevPage} disabled={currentPage === 1}>
                    <CHEVRON_LEFT />
                </S.ArrowButton>
            </S.ArrouButtonBox>
            
            <S.PageButtonBox>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <S.PageButton 
                        key={page} 
                        $active={currentPage === page}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </S.PageButton>
                ))}
            </S.PageButtonBox>

            <S.ArrouButtonBox>
                <S.ArrowButton onClick={handleNextPage} disabled={currentPage === totalPages}>
                    <CHEVRON_RIGHT />
                </S.ArrowButton>
                <S.ArrowButton onClick={handleLastPage} disabled={currentPage === totalPages}>
                    <CHEVRONS_RIGHT />
                </S.ArrowButton>
            </S.ArrouButtonBox>
        </S.PaginationWrapper>
    );
}
