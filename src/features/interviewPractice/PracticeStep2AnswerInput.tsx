import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/interviewPractice/PracticeStep2.styles";

interface PracticeStep2AnswerInputProps {
  text: string;
  setText: (value: string) => void;
  isPending: boolean;
  isSessionReady: boolean;
  isInterviewFinished: boolean;
  onSend: () => void;
}

export default function PracticeStep2AnswerInput({
  text,
  setText,
  isPending,
  isSessionReady,
  isInterviewFinished,
  onSend,
}: PracticeStep2AnswerInputProps) {
  const isSendDisabled =
    isPending || isInterviewFinished || !isSessionReady || !text.trim();

  return (
    <S.AnswerButtonBox>
      <S.AnswerBox>
        <S.AnswerInput
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={
            isInterviewFinished
              ? "면접이 종료되었습니다."
              : "여기에 답변을 작성하세요..."
          }
          onKeyDown={(e) => e.key === "Enter" && !isSendDisabled && onSend()}
          disabled={isInterviewFinished}
        />
      </S.AnswerBox>
      <DefaultButton
        width={100}
        type={isSendDisabled ? "disabled" : "primary"}
        text={isPending ? "전송 중..." : isSessionReady ? "전송" : "준비 중..."}
        onClick={isSendDisabled ? undefined : onSend}
      />
    </S.AnswerButtonBox>
  );
}
