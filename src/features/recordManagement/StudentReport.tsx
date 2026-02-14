import * as S from "@/features/recordManagement/StudentReport.styles"
import Title from "@/components/title/Title"
import { useState, useMemo } from "react"
import SearchFilter from "@/components/filter/SearchFilter"
import { DefaultButton } from "@/components/button/Button"
import RecordCard from "@/components/card/RecordCard"
import Pagination from "@/components/common/pagination/Pagination";
import EmptyState from "@/components/common/emptyState/EmptyState";
import SEARCH_NONE from "@/assets/icons/search_x.svg?react";
import FILE_NONE from "@/assets/icons/file_x.svg?react"
import { useNavigate } from "react-router-dom"
import { RECORDS_DUMMY_DATA } from "@/constants/records"; 

const ITEMS_PER_PAGE = 7;

export default function StudentReport() {
    const navigate = useNavigate();
    const [inputText, setInputText] = useState<string>(""); 
    const [searchQuery, setSearchQuery] = useState<string>(""); 
    const [currentPage, setCurrentPage] = useState<number>(1);

    const filteredData = useMemo(() => {
        return RECORDS_DUMMY_DATA.filter(item => item.title.includes(searchQuery));
    }, [searchQuery]);

    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE) || 0;
    
    const currentData = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredData, currentPage]);

    const handleSearchClick = () => {
        setSearchQuery(inputText);
        setCurrentPage(1); 
    };

    const handleCardClick = (id: number) => {
        navigate(`/record_management/${id}`);
    };

    return (
        <S.StudentReportContainer>
            <Title text="생기부 관리"/>
            {RECORDS_DUMMY_DATA.length > 0 ? (
                <S.SearchListWrapper>
                    <S.SearchBlock>
                        <S.TotalCount>총 {totalItems}개</S.TotalCount>
                        <S.SearchBox>
                            <SearchFilter 
                                text={inputText} 
                                setText={setInputText} 
                                placeholder="생기부 제목을 입력해주세요" 
                                onClick={handleSearchClick} 
                            />
                            <DefaultButton width={166} type="primary" text="생기부 추가하기" onClick={() => navigate("upload")} />
                        </S.SearchBox>
                    </S.SearchBlock>
                    <S.ListBox>
                        {currentData.length > 0 ? (
                            currentData.map((item) => (
                                <RecordCard 
                                    key={item.id} 
                                    text={item.title}
                                    onClick={() => handleCardClick(item.id)}
                                />
                            ))
                        ) : (
                            <S.EmptyListWrapper>
                                <EmptyState 
                                    icon={<SEARCH_NONE width={48} height={48} />}
                                    title="검색 결과가 없어요"
                                    subtitle="다른 키워드로 검색해보세요"
                                />
                            </S.EmptyListWrapper>
                        )}
                    </S.ListBox>
                    
                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </S.SearchListWrapper>
            ) : (
                <S.EmptyReportWrapper>
                    <EmptyState
                        icon={<FILE_NONE width={48} height={48} />}
                        title="아직 등록된 생활 기록부가 없어요"
                        subtitle="생기부를 추가하고 나에게 딱 맞는 질문을 받아보세요"
                    >
                         <DefaultButton width={174} type="primary" text="생기부 추가하기" onClick={() => navigate("upload")}/>
                    </EmptyState>
                </S.EmptyReportWrapper>
            )}
        </S.StudentReportContainer>
    )
}