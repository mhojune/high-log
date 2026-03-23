import { DefaultButton } from "@/components/button/Button";
import ListFilter from "@/components/filter/ListFilter";
import Title from "@/components/title/Title";
import { useState } from "react";
// import EmptyState from "@/components/common/emptyState/EmptyState";
// import FILE_NONE from "@/assets/icons/file_x.svg?react";
// 필요한 아이콘들을 임포트해주세요 (예시 이름)
// import FILTER_ICON from "@/assets/icons/filter.svg?react";
// import CHEVRON_DOWN from "@/assets/icons/chevron_down.svg?react";
import * as S from "@/pages/interviewPractice/storage/InterviewStorage.styles";

// 📌 테스트용 더미 데이터 (나중에 백엔드 API 데이터로 교체하시면 됩니다)
const MOCK_DATA = [
  {
    id: 1,
    date: "오늘 10:20",
    count: 5,
    tags: ["동아리", "세특"],
    duration: "9:45",
  },
  {
    id: 2,
    date: "어제 22:05",
    count: 3,
    tags: ["세특", "동아리"],
    duration: "12:20",
  },
  {
    id: 3,
    date: "3일 전 19:40",
    count: 4,
    tags: ["세특", "진로"],
    duration: "15:00",
  },
];

const ITEM_OPTIONS = ["전체", "세특", "동아리", "진로"];
const DATE_OPTIONS = ["전체", "오늘", "어제", "3일 전", "1주 이내"];

export default function InterviewStorage() {
  const [itemFilterText, setItemFilterText] = useState<string>("");
  const [dateFilterText, setDateFilterText] = useState<string>("");

  const handleResetFilters = () => {
    setItemFilterText("");
    setDateFilterText("");
  };

  const filteredData = MOCK_DATA.filter((item) => {
    const selectedItem = itemFilterText.trim();
    const selectedDate = dateFilterText.trim();

    const matchItem =
      !selectedItem ||
      selectedItem === "전체" ||
      item.tags.includes(selectedItem);

    const matchDate =
      !selectedDate ||
      selectedDate === "전체" ||
      (selectedDate === "1주 이내" &&
        ["오늘", "어제", "3일"].some((keyword) =>
          item.date.startsWith(keyword),
        )) ||
      (selectedDate !== "1주 이내" && item.date.startsWith(selectedDate));

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
                  <ListFilter
                    text={dateFilterText}
                    setText={setDateFilterText}
                    placeholder="날짜"
                    onClick={() => {}}
                    data={DATE_OPTIONS}
                    width={200}
                    listWidth={154}
                    listHeight={198}
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
                    onClick={() => {}}
                  />
                </S.TableContentBox>
              ))}
            </S.TableContainer>
          </S.StorageBox>
        </S.ContentWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
