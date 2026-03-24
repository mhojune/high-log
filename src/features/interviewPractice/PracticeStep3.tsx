import { DefaultButton } from "@/components/button/Button";
import Title from "@/components/title/Title";
import * as S from "@/features/interviewPractice/PracticeStep3.styles";
import { useState } from "react";
import CheckIcon from "@/assets/icons/check.svg?react";
import { useNavigate } from "react-router-dom";

interface FeedbackItem {
  id: number;
  question: string;
  description: string;
}

const FEEDBACK_LIST: FeedbackItem[] = [
  {
    id: 1,
    question: "상황/배경이 명확한가?",
    description: "어떤 맥락에서 이 일이 발생했는지",
  },
  {
    id: 2,
    question: "본인 역할이 구체적인가?",
    description: "“내가 무엇을 했다”가 보이는지",
  },
  {
    id: 3,
    question: "근거/수치가 있는가?",
    description: "성과, 비교, 결과를 수치로 나타낼수 있는지",
  },
  {
    id: 4,
    question: "배운 점/다음 행동이 있는가?",
    description: "성장 포인트로 마무리되는지",
  },
];

export default function PracticeStep3() {
  const navigate = useNavigate();
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const handleCheck = (id: number) => {
    setCheckedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <S.PracticeStep3Container>
      <Title text="면접 연습" />
      <S.Step3Wrapper>
        <S.TitleBox>
          <S.Title>피드백 체크리스트</S.Title>
          <DefaultButton
            width={78}
            type="primary"
            text="저장"
            onClick={() => {
              navigate("/interview/result");
            }}
          />
        </S.TitleBox>
        <S.FeedBackList>
          {FEEDBACK_LIST.map((item) => (
            <S.FeedBackBox key={item.id}>
              <S.CustomCheckBoxContainer
                $isChecked={checkedItems.includes(item.id)}
                onClick={() => handleCheck(item.id)}
              >
                {checkedItems.includes(item.id) && (
                  <CheckIcon width={40} height={40} stroke="#5A5CF5" />
                )}
              </S.CustomCheckBoxContainer>
              <S.TextBox>
                <S.Question>{item.question}</S.Question>
                <S.Description>{item.description}</S.Description>
              </S.TextBox>
            </S.FeedBackBox>
          ))}
        </S.FeedBackList>
      </S.Step3Wrapper>
    </S.PracticeStep3Container>
  );
}
