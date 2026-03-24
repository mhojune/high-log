import Pagination from "@/components/common/pagination/Pagination";
import Title from "@/components/title/Title";
import * as S from "@/pages/support/Support.styles";
import { useState, useMemo } from "react"; //
import { useNavigate } from "react-router-dom";
import { DUMMY_SUPPORT } from "@/features/support/SupportData";
import SupportList from "@/features/support/SupportList";

const ITEMS_PER_PAGE = 7;

export default function Support() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleListClick = (id: number) => {
    navigate(`/support/${id}`);
  };

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return DUMMY_SUPPORT.slice(startIndex, endIndex);
  }, [currentPage]);

  const totalPages = Math.ceil(DUMMY_SUPPORT.length / ITEMS_PER_PAGE) || 0;
  return (
    <S.SupportContainer>
      <S.SupportWrapper>
        <Title text="공지사항" />
        <SupportList
          supportList={currentData}
          handleListClick={handleListClick}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </S.SupportWrapper>
    </S.SupportContainer>
  );
}
