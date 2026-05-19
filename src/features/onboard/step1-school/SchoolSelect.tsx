import * as S from "@/features/onboard/step1-school/SchoolSelect.styles";
import FilterableFieldSelect from "@/features/interviewQuestion/createQuestionFormBox/FilterableFieldSelect";
import { SCHOOL_OPTIONS } from "@/constants/schoolDepartments";
import { DefaultButton } from "@/components/button/Button";

interface SchoolSelectProps {
  school: string;
  onSchoolChange: (value: string) => void;
  onNext: () => void;
}

export default function SchoolSelect({ school, onSchoolChange, onNext }: SchoolSelectProps) {
  const canProceed = Boolean(school.trim());

  return (
    <S.Wrapper>
      <S.Title>
        면접을 준비하는 <S.Highlight>학교</S.Highlight>를 선택해 주세요
      </S.Title>
      <S.SelectRow>
        <FilterableFieldSelect
          width="340px"
          options={SCHOOL_OPTIONS}
          value={school}
          setValue={onSchoolChange}
          placeholder="학교를 입력해 주세요"
        />
        <DefaultButton
          width={96}
          type={canProceed ? "primary" : "disabled"}
          text="다음"
          onClick={canProceed ? onNext : undefined}
        />
      </S.SelectRow>
    </S.Wrapper>
  );
}

