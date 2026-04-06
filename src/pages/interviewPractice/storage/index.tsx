import { DefaultButton } from "@/components/button/Button";
import ListFilter from "@/components/filter/ListFilter";
import DateFilter from "@/components/filter/DateFilter";
import Title from "@/components/title/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/interviewPractice/storage/InterviewStorage.styles";
import { useInterviewList } from "@/api/interview/useInterviewApi";

const ITEM_OPTIONS = [
  "전체",
  "출결",
  "세특",
  "동아리",
  "진로",
  "리더십",
  "기타",
];

const formatDateText = (dateString: string) => {
  const date = new Date(dateString);

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const timeText = `${hours}:${minutes}`;

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day} ${timeText}`;
};

const formatDuration = (seconds: number) => {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
};

export default function InterviewStorage() {
  const navigate = useNavigate();
  const [itemFilterText, setItemFilterText] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const { data: listData, isLoading } = useInterviewList();

  const handleResetFilters = () => {
    setItemFilterText("");
    setSelectedDate(null);
  };

  if (isLoading) {
    return <></>;
  }

  const interviews = listData?.interviews || [];

  const filteredData = interviews.filter((item) => {
    const selectedItem = itemFilterText.trim();
    const itemDate = new Date(item.created_at);

    const matchItem =
      !selectedItem ||
      selectedItem === "전체" ||
      item.sub_topics.includes(selectedItem);

    let matchDate = true;
    if (selectedDate) {
      const itemYear = itemDate.getFullYear();
      const itemMonth = itemDate.getMonth();
      const itemDay = itemDate.getDate();

      const selectedYear = selectedDate.getFullYear();
      const selectedMonth = selectedDate.getMonth();
      const selectedDay = selectedDate.getDate();

      matchDate =
        itemYear === selectedYear &&
        itemMonth === selectedMonth &&
        itemDay === selectedDay;
    }

    return matchItem && matchDate;
  });

  return (
    <S.Container>
      <S.Wrapper>
        <Title text="면접 보관함" />
        <S.ContentWrapper>
          <S.StorageBox>
            <S.FilterSection>
              <S.FilterGroup>
                <S.FilterItem>
                  <S.FilterLabel>항목</S.FilterLabel>
                  <ListFilter
                    text={itemFilterText}
                    setText={setItemFilterText}
                    placeholder="항목"
                    onClick={() => {}}
                    data={ITEM_OPTIONS}
                    width={200}
                    listWidth={154}
                    listHeight={198}
                  />
                </S.FilterItem>

                <S.FilterItem>
                  <S.FilterLabel>날짜</S.FilterLabel>
                  <DateFilter
                    selectedDate={selectedDate}
                    onSelect={setSelectedDate}
                    placeholder="날짜 선택"
                  />
                </S.FilterItem>
              </S.FilterGroup>

              <DefaultButton
                width={174}
                type="secondary"
                text="필터 초기화"
                onClick={handleResetFilters}
              />
            </S.FilterSection>

            <S.TableContainer>
              <S.TableHeader>
                <S.HeaderText>날짜/시간</S.HeaderText>
                <S.HeaderText>항목</S.HeaderText>
                <S.HeaderText>소요 시간</S.HeaderText>
                <S.HeaderText>상세</S.HeaderText>
              </S.TableHeader>
              {filteredData.length === 0 ? (
                <S.EmptyState>
                  <S.EmptyStateText>
                    조건에 맞는 데이터가 없어요
                  </S.EmptyStateText>
                  <S.EmptyStateSubText>
                    선택한 항목을 확인하고 검색어를 정정해주세요
                  </S.EmptyStateSubText>
                </S.EmptyState>
              ) : (
                <S.TableBody>
                  {filteredData.map((item) => (
                    <S.TableContentBox key={item.session_id}>
                      <S.DayCountBox>
                        <S.DayText>{formatDateText(item.created_at)}</S.DayText>
                        <S.CountText>{item.question_count}문항</S.CountText>
                      </S.DayCountBox>

                      <S.TagGroup>
                        {item.sub_topics.map((tag, idx) => (
                          <S.Tag key={idx}>{tag}</S.Tag>
                        ))}
                      </S.TagGroup>

                      <S.DurationBadge>
                        {formatDuration(item.total_duration)}
                      </S.DurationBadge>

                      <DefaultButton
                        width={100}
                        type="secondary"
                        text="결과 보기"
                        onClick={() =>
                          navigate(`/interview/result/${item.session_id}`)
                        }
                      />
                    </S.TableContentBox>
                  ))}
                </S.TableBody>
              )}
            </S.TableContainer>
          </S.StorageBox>
        </S.ContentWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
