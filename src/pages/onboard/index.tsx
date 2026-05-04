import * as S from "@/pages/onboard/Onboard.styles";
import OnboardProgressBar from "@/features/onboard/shared/OnboardProgressBar";
import Logo from "@/assets/images/logo.svg?react";
import ChevronLeft from "@/assets/icons/chevron_left.svg?react";
import SchoolSelect from "@/features/onboard/step1-school/SchoolSelect";
import DepartmentSelect from "@/features/onboard/step2-department/DepartmentSelect";
import ApplicationTypeSelect from "@/features/onboard/step3-application-type/ApplicationTypeSelect";
import OnboardStep4 from "@/features/onboard/step4-record/OnboardStep4";
import OnboardShowQuestions from "@/features/onboard/step5-questions/OnboardShowQuestions";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";

export default function Onboard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [onboardFormData, setOnboardFormData] = useState({
    school: "",
    department: "",
    applicationType: "",
  });
  const handleLogoClick = () => {
    navigate("/");
  };

  const handleBackClick = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const handleSchoolChange = (school: string) => {
    setOnboardFormData((prev) => ({
      ...prev,
      school,
      department: prev.school === school ? prev.department : "",
      applicationType:
        prev.school === school && prev.department ? prev.applicationType : "",
    }));
  };

  const handleDepartmentChange = (department: string) => {
    setOnboardFormData((prev) => ({
      ...prev,
      department,
      applicationType: prev.department === department ? prev.applicationType : "",
    }));
  };

  const handleSchoolStepNext = () => {
    setCurrentStep(2);
  };

  const handleDepartmentStepNext = () => {
    setCurrentStep(3);
  };

  const handleApplicationTypeChange = (applicationType: string) => {
    setOnboardFormData((prev) => ({ ...prev, applicationType }));
  };

  const handleApplicationTypeStepNext = () => {
    setCurrentStep(4);
  };

  const handleFinishOnboardQuestionGeneration = useCallback(() => {
    setCurrentStep(5);
  }, []);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <S.Step1Content>
            <SchoolSelect
              school={onboardFormData.school}
              onSchoolChange={handleSchoolChange}
              onNext={handleSchoolStepNext}
            />
          </S.Step1Content>
        );
      case 2:
        return (
          <S.Step2Content>
            <DepartmentSelect
              school={onboardFormData.school}
              department={onboardFormData.department}
              onDepartmentChange={handleDepartmentChange}
              onNext={handleDepartmentStepNext}
            />
          </S.Step2Content>
        );
      case 3:
        return (
          <S.Step3Content>
            <ApplicationTypeSelect
              applicationType={onboardFormData.applicationType}
              onApplicationTypeChange={handleApplicationTypeChange}
              onNext={handleApplicationTypeStepNext}
            />
          </S.Step3Content>
        );
      case 4:
        return (
          <OnboardStep4 onFinishQuestionGeneration={handleFinishOnboardQuestionGeneration} />
        );
      case 5:
        return (
          <S.Step5Content>
            <S.Step5Inner>
              <OnboardShowQuestions />
            </S.Step5Inner>
          </S.Step5Content>
        );
      default:
        return null;
    }
  };

  return (
    <S.Container>
      <S.Content>
        <OnboardProgressBar totalSteps={5} currentStep={currentStep} />
        <S.HeaderRow>
          {currentStep > 1 && (
            <S.BackIconButton onClick={handleBackClick} aria-label="이전 단계">
              <ChevronLeft width={24} height={24} />
            </S.BackIconButton>
          )}
          <S.LogoWrapper $isFirstStep={currentStep === 1} onClick={handleLogoClick}>
            <Logo />
          </S.LogoWrapper>
        </S.HeaderRow>
        <S.StepContent>{renderStepContent()}</S.StepContent>
      </S.Content>
    </S.Container>
  );
}
