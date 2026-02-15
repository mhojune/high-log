import PracticeStep1 from "@/features/interviewPractice/PracticeStep1";
import PracticeStep2 from "@/features/interviewPractice/PracticeStep2";
import * as S from "@/pages/interviewPractice/InterviewPractice.styles"
import { useState } from "react";

export default function InterviewPractice() {
  const [step, setStep] = useState<number>(1)
  return (
    <S.InterviewPracticeContainer>
      {step === 1 ? (
        <PracticeStep1 onNext={() => setStep(2)} />
      ) : (
        <PracticeStep2 />
      )}
    </S.InterviewPracticeContainer>
  );
};
