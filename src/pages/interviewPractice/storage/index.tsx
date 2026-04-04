import { DefaultButton } from "@/components/button/Button";
import ListFilter from "@/components/filter/ListFilter";
import DateFilter from "@/components/filter/DateFilter";
import Title from "@/components/title/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/pages/interviewPractice/storage/InterviewStorage.styles";

const MOCK_DATA = [
  {
    id: 1,
    sessionId: "dummy_session_id_1",
    date: "오늘 10:20",
    realDate: new Date(), // Today
    count: 5,
    tags: ["동아리", "세특"],
    duration: "9:45",
  },
  {
    id: 2,
    sessionId: "dummy_session_id_2",
    date: "어제 22:05",
    realDate: new Date(new Date().setDate(new Date().getDate() - 1)), // Yesterday
    count: 3,
    tags: ["세특", "동아리"],
    duration: "12:20",
  },
  {
    id: 3,
    sessionId: "dummy_session_id_3",
    date: "3일 전 19:40",
    realDate: new Date(new Date().setDate(new Date().getDate() - 3)), // 3 days ago
    count: 4,
    tags: ["세특", "진로"],
    duration: "15:00",
  },
];

const ITEM_OPTIONS = ["전체", "세특", "동아리", "진로"];

export default function InterviewStorage() {
  const navigate = useNavigate();
  const [itemFilterText, setItemFilterText] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleResetFilters = () => {
    setItemFilterText("");
    setSelectedDate(null);
  };

  const filteredData = MOCK_DATA.filter((item) => {
    const selectedItem = itemFilterText.trim();

    const matchItem =
      !selectedItem ||
      selectedItem === "전체" ||
      item.tags.includes(selectedItem);

    let matchDate = true;
    if (selectedDate) {
      const itemYear = item.realDate.getFullYear();
      const itemMonth = item.realDate.getMonth();
      const itemDay = item.realDate.getDate();

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
                <>
                  {filteredData.map((item) => (
                    <S.TableContentBox key={item.id}>
                      <S.DayCountBox>
                        <S.DayText>{item.date}</S.DayText>
                        <S.CountText>{item.count}문항</S.CountText>
                      </S.DayCountBox>

                      <S.TagGroup>
                        {item.tags.map((tag, idx) => (
                          <S.Tag key={idx}>{tag}</S.Tag>
                        ))}
                      </S.TagGroup>

                      <S.DurationBadge>{item.duration}</S.DurationBadge>

                      <DefaultButton
                        width={100}
                        type="secondary"
                        text="결과 보기"
                        onClick={() => navigate(`/interview/result/${item.sessionId}`)}
                      />
                    </S.TableContentBox>
                  ))}
                </>
              )}
            </S.TableContainer>
          </S.StorageBox>
        </S.ContentWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
