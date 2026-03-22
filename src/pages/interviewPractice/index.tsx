import PracticeStep1 from "@/features/interviewPractice/PracticeStep1";
import PracticeStep2 from "@/features/interviewPractice/PracticeStep2";
import PracticeStep3 from "@/features/interviewPractice/PracticeStep3";
import * as S from "@/pages/interviewPractice/InterviewPractice.styles";
import { useState } from "react";

export default function InterviewPractice() {
  const [step, setStep] = useState<number>(1);
  const [selectedRecordId, setSelectedRecordId] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<
    "Easy" | "Normal" | "Hard" | null
  >(null);
  const [selectedUniv, setSelectedUniv] = useState<string>("");
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [selectedMode, setSelectedMode] = useState<"text" | "voice" | null>(
    null,
  );

  const handleSettingsComplete = (
    recordId: number,
    difficulty: "Easy" | "Normal" | "Hard",
    univ: string,
    department: string,
    mode: "text" | "voice",
  ) => {
    setSelectedRecordId(recordId);
    setSelectedDifficulty(difficulty);
    setSelectedUniv(univ);
    setSelectedDepartment(department);
    setSelectedMode(mode);
    setStep(2);
  };

  return (
    <S.InterviewPracticeContainer>
      {step === 1 ? (
        <PracticeStep1 onSettingsComplete={handleSettingsComplete} />
      ) : step === 2 ? (
        <PracticeStep2
          onNext={() => setStep(3)}
          recordId={selectedRecordId}
          difficulty={selectedDifficulty}
          univ={selectedUniv}
          department={selectedDepartment}
          mode={selectedMode}
        />
      ) : (
        <PracticeStep3 />
      )}
    </S.InterviewPracticeContainer>
  );
}
