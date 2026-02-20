import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/interviewPractice/PracticeStep2.styles";

interface PracticeStep2AnswerInputProps {
  text: string;
  setText: (value: string) => void;
  isPending: boolean;
  isInterviewFinished: boolean;
  onSend: () => void;
}

export default function PracticeStep2AnswerInput({
  text,
  setText,
  isPending,
  isInterviewFinished,
  onSend,
}: PracticeStep2AnswerInputProps) {
  const isSendDisabled = isPending || isInterviewFinished || !text.trim();

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
          onKeyDown={(e) => e.key === "Enter" && onSend()}
          disabled={isPending || isInterviewFinished}
        />
      </S.AnswerBox>
      <DefaultButton
        width={100}
        type={isSendDisabled ? "disabled" : "primary"}
        text={isPending ? "전송 중..." : "전송"}
        onClick={isSendDisabled ? undefined : onSend}
      />
    </S.AnswerButtonBox>
  );
}
