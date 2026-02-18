import PracticeStep1 from "@/features/interviewPractice/PracticeStep1";
import PracticeStep2 from "@/features/interviewPractice/PracticeStep2";
import PracticeStep3 from "@/features/interviewPractice/PracticeStep3";
import * as S from "@/pages/interviewPractice/InterviewPractice.styles";
import { useState } from "react";

export default function InterviewPractice() {
  const [step, setStep] = useState<number>(1);
  return (
    <S.InterviewPracticeContainer>
      {step === 1 ? (
        <PracticeStep1 onNext={() => setStep(2)} />
      ) : step === 2 ? (
        <PracticeStep2 onNext={() => setStep(3)} />
      ) : (
        <PracticeStep3 />
      )}
    </S.InterviewPracticeContainer>
  );
}
