import RadioBox from "@/components/input/RadioBox";
import { DefaultButton } from "@/components/button/Button";
import * as S from "@/features/onboard/step3-application-type/ApplicationTypeSelect.styles";

const APPLICATION_TYPE_OPTIONS = [
  "학생부 종합 전형",
  "학생부 교과 전형",
  "특기자/실기 전형",
  "인적성/구술 전형",
  "학교 자체 전형",
];

interface ApplicationTypeSelectProps {
  applicationType: string;
  onApplicationTypeChange: (value: string) => void;
  onNext: () => void;
}

export default function ApplicationTypeSelect({
  applicationType,
  onApplicationTypeChange,
  onNext,
}: ApplicationTypeSelectProps) {
  const canProceed = Boolean(applicationType.trim());

  return (
    <S.Wrapper>
      <S.Title>
        면접을 준비하는 <S.Highlight>전형</S.Highlight>을 선택해 주세요
      </S.Title>
      <S.RadioGroup>
        {APPLICATION_TYPE_OPTIONS.map((option) => (
          <S.RadioOption key={option} onClick={() => onApplicationTypeChange(option)}>
            <RadioBox
              isChecked={applicationType === option}
              onClick={() => onApplicationTypeChange(option)}
            />
            {option}
          </S.RadioOption>
        ))}
      </S.RadioGroup>
      <S.ButtonRow>
        <DefaultButton
          width={96}
          type={canProceed ? "primary" : "disabled"}
          text="다음"
          onClick={canProceed ? onNext : undefined}
        />
      </S.ButtonRow>
    </S.Wrapper>
  );
}
