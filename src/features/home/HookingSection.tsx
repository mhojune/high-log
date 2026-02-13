import * as S from "@/features/home/HookingSection.styles";
import FIRECRACKER from "@/assets/images/firecracker.png";
import CHEVRON_RIGHT from "@/assets/icons/chevron_right.svg?react";
import { useEffect, useState } from "react";
import { STAT_CONFIG, type StatData } from "@/constants/home";

export default function HookingSection() {
  const [stats, setStats] = useState<StatData>({
    questionCount: 0,
    userCount: 0,
    practiceCount: 0,
  });

  useEffect(() => {
    // 나중에 api 파일로 이동 예정
    const fetchStatData = async () => {
      try {
        //임시 데이터 설정
        const mockData: StatData = {
          questionCount: 12547,
          userCount: 5807,
          practiceCount: 9847,
        };

        setStats(mockData);
      } catch (error) {
        console.error("데이터 로드 실패:", error);
      }
    };
    fetchStatData();
  }, []);

  return (
    <S.HookingSectionContainer>
      <S.HookingTextWrapper>
        <S.HookingTextBox>
          <S.HookingTextMain>
            {"\"면접 준비,\n어디서부터 시작해야 할지 모르겠어요\""}
          </S.HookingTextMain>
          <S.HookingTextSubBox>
            <S.HookingTextSub>
              면접 준비, 어떻게 해야할지 늘 고민하셨나요?
            </S.HookingTextSub>
            <S.HookingTextSub>
              생기부 기반
              <S.HookingTextSubBold> AI 질문 생성</S.HookingTextSubBold>
              으로 체계적인 면접 준비를 시작해 보세요
            </S.HookingTextSub>
          </S.HookingTextSubBox>
        </S.HookingTextBox>
      </S.HookingTextWrapper>

      <S.HookingCardWrapper>
        <S.HookingCardStatBox>
          {STAT_CONFIG.map((item) => (
            <S.HookingCardStat key={item.id}>
              <S.HookingCardStatTextBox>
                <S.HookingCardStatTextMain>
                  {item.label}
                </S.HookingCardStatTextMain>

                <S.HookingCardStatTextSub>
                  {`${stats[item.key].toLocaleString()}${item.unit}`}
                </S.HookingCardStatTextSub>

                <S.HookingCardStatImg src={item.img} alt={item.label} />
              </S.HookingCardStatTextBox>
            </S.HookingCardStat>
          ))}
        </S.HookingCardStatBox>

        <S.HookingEventCard to="/signup">
          <S.HookingEventText>
            회원가입
            <S.HookingEventTextSub>{`하고\n`}</S.HookingEventTextSub>
            무료이용권
            <S.HookingEventTextSub>받기</S.HookingEventTextSub>
          </S.HookingEventText>
          <S.HookingEventImg src={FIRECRACKER} />
          <CHEVRON_RIGHT
            style={{ width: "max(48px, 3.33vw)", height: "max(48px, 3.33vw)" }}
            stroke="#D4D9F9"
          />
        </S.HookingEventCard>
      </S.HookingCardWrapper>
    </S.HookingSectionContainer>
  );
}
