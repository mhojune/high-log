import { DefaultButton } from "@/components/button/Button";
import timerIcon from "@/assets/icons/timer.svg";
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
        <img src={timerIcon} alt="timer" width={24} height={24} />
        <S.Timer>{formatTime(responseTimer)}</S.Timer>
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
