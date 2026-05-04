import { useState } from "react";
import * as S from "@/pages/onboard/Onboard.styles";
import { useFileUpload } from "@/hooks/useFileUpload";
import OnboardQuestionGenerating from "@/features/onboard/step4-record/OnboardQuestionGenerating";
import OnboardSchoolRecordUpload from "@/features/onboard/step4-record/OnboardSchoolRecordUpload";

type Step4Screen = "upload" | "loading";

interface OnboardStep4Props {
  onFinishQuestionGeneration: () => void;
}

/** Step4: 업로드 ↔ 질문 로딩 전환만 담당 (파일 상태는 훅을 여기서 유지해 로딩 중에도 유지) */
export default function OnboardStep4({ onFinishQuestionGeneration }: OnboardStep4Props) {
  const upload = useFileUpload();
  const [screen, setScreen] = useState<Step4Screen>("upload");

  if (screen === "loading") {
    return (
      <S.Step4LoadingOuter>
        <S.Step4LoadingInner>
          <OnboardQuestionGenerating onLoadingComplete={onFinishQuestionGeneration} />
        </S.Step4LoadingInner>
      </S.Step4LoadingOuter>
    );
  }

  return (
    <S.Step4Content>
      <OnboardSchoolRecordUpload
        upload={upload}
        onStartQuestionLoading={() => setScreen("loading")}
      />
    </S.Step4Content>
  );
}
