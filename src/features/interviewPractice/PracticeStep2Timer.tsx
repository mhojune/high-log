import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/interviewPractice/PracticeStep2.styles";

interface PracticeStep2TimerProps {
  responseTimer: number;
  onReset: () => void;
  formatTime: (seconds: number) => string;
}

export default function PracticeStep2Timer({
  responseTimer,
  onReset,
  formatTime,
}: PracticeStep2TimerProps) {
  return (
    <S.TimerResetBox>
      <S.TimerBox>
        <S.Timer>타이머 : {formatTime(responseTimer)}</S.Timer>
      </S.TimerBox>
      <DefaultButton
        width={78}
        type="secondary"
        text="리셋"
        onClick={onReset}
      />
    </S.TimerResetBox>
  );
}
