import Pagination from "@/components/common/pagination/Pagination";
import Title from "@/components/title/Title";
import * as S from "@/pages/support/Support.styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SupportList from "@/features/support/SupportList";
import { useNotices } from "@/api/notice/useNoticeApi";

const ITEMS_PER_PAGE = 7;

export default function Support() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading, isError } = useNotices({
    page: currentPage - 1,
    size: ITEMS_PER_PAGE,
  });

  const handleListClick = (id: number) => {
    navigate(`/support/${id}`);
  };

  const supportList =
    data?.notices.map((notice) => ({
      id: notice.id,
      title: notice.title,
      content: notice.content,
      date: notice.createdAt.split("T")[0],
      isPinned: notice.isPinned,
      createdAt: notice.createdAt,
    })) || [];

  return (
    <S.SupportContainer>
      <S.SupportWrapper>
        <Title text="공지사항" />

        {isLoading ? (
          <div>불러오는 중...</div>
        ) : isError ? (
          <div>공지사항을 불러올 수 없습니다.</div>
        ) : (
          <SupportList
            supportList={supportList}
            handleListClick={handleListClick}
          />
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={data?.totalPages || 0}
          onPageChange={setCurrentPage}
        />
      </S.SupportWrapper>
    </S.SupportContainer>
  );
}
