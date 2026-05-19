import { useMemo } from "react";
import FilterableFieldSelect from "@/features/interviewQuestion/createQuestionFormBox/FilterableFieldSelect";
import { getDepartmentOptionsForSchool } from "@/constants/schoolDepartments";
import * as S from "@/features/onboard/step2-department/DepartmentSelect.styles";
import { DefaultButton } from "@/components/button/Button";

interface DepartmentSelectProps {
  school: string;
  department: string;
  onDepartmentChange: (value: string) => void;
  onNext: () => void;
}

export default function DepartmentSelect({
  school,
  department,
  onDepartmentChange,
  onNext,
}: DepartmentSelectProps) {
  const departmentOptions = useMemo(
    () => getDepartmentOptionsForSchool(school),
    [school],
  );

  const canProceed = Boolean(school && department.trim());

  return (
    <S.Wrapper>
      <S.Title>
        면접을 준비하는 <S.Highlight>학과</S.Highlight>를 선택해 주세요
      </S.Title>
      <S.SelectRow>
        <FilterableFieldSelect
          width="340px"
          options={departmentOptions}
          value={department}
          setValue={onDepartmentChange}
          placeholder="학과를 입력해 주세요"
          disabled={!school}
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
