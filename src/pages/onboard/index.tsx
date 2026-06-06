import * as S from "@/pages/onboard/Onboard.styles";
import OnboardProgressBar from "@/features/onboard/shared/OnboardProgressBar";
import Logo from "@/assets/images/NavLogo.svg?react";
import ChevronLeft from "@/assets/icons/chevron_left.svg?react";
import SchoolSelect from "@/features/onboard/step1-school/SchoolSelect";
import DepartmentSelect from "@/features/onboard/step2-department/DepartmentSelect";
import ApplicationTypeSelect from "@/features/onboard/step3-application-type/ApplicationTypeSelect";
import OnboardSchoolRecordUpload from "@/features/onboard/step4-record/OnboardSchoolRecordUpload";
import OnboardQuestionGenerating from "@/features/onboard/step4-record/OnboardQuestionGenerating";
import OnboardShowQuestions from "@/features/onboard/step5-questions/OnboardShowQuestions";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useRef, useState } from "react";
import { useFileUpload } from "@/hooks/useFileUpload";
import {
  generateGuestQuestionsAndStream,
  issueGuestSession,
  uploadGuestRecordAndParse,
} from "@/api/guest/guestApi";
import { parseApiError } from "@/api/client";

export default function Onboard() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const upload = useFileUpload();
  const [isUploadingRecord, setIsUploadingRecord] = useState(false);
  const [isRecordUploadComplete, setIsRecordUploadComplete] = useState(false);
  const [questionProgress, setQuestionProgress] = useState(0);
  const [isQuestionComplete, setIsQuestionComplete] = useState(false);
  const hasStartedQuestionGenerationRef = useRef(false);
  const lastUploadedFileKeyRef = useRef<string | null>(null);
  const [onboardFormData, setOnboardFormData] = useState({
    school: "",
    department: "",
    applicationType: "",
  });

  useEffect(() => {
    issueGuestSession().catch((error) => {
      const { message } = parseApiError(error);
      window.alert(message || "게스트 세션 발급에 실패했습니다.");
    });
  }, []);
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

  const handleUploadStepNext = async () => {
    if (!isRecordUploadComplete) return;
    setCurrentStep(2);
  };

  const handleSchoolStepNext = () => {
    setCurrentStep(3);
  };

  const handleApplicationTypeChange = (applicationType: string) => {
    setOnboardFormData((prev) => ({ ...prev, applicationType }));
  };

  const handleDepartmentStepNext = () => {
    setCurrentStep(4);
  };

  const handleApplicationTypeStepNext = () => {
    hasStartedQuestionGenerationRef.current = false;
    setQuestionProgress(0);
    setIsQuestionComplete(false);
    setCurrentStep(5);
  };

  const startGuestQuestionGeneration = useCallback(async () => {
    if (hasStartedQuestionGenerationRef.current) return;
    hasStartedQuestionGenerationRef.current = true;

    try {
      await generateGuestQuestionsAndStream(
        {
          target_school: onboardFormData.school,
          target_major: onboardFormData.department,
          interview_type: onboardFormData.applicationType,
        },
        setQuestionProgress,
      );
      setQuestionProgress(100);
      setIsQuestionComplete(true);
      sessionStorage.setItem("guest_onboarded", "true");
    } catch (error) {
      hasStartedQuestionGenerationRef.current = false;
      const { message } = parseApiError(error);
      window.alert(message || "질문 생성 중 오류가 발생했습니다.");
      setCurrentStep(4);
    }
  }, [
    onboardFormData.applicationType,
    onboardFormData.department,
    onboardFormData.school,
  ]);

  useEffect(() => {
    if (currentStep !== 5) return;
    void startGuestQuestionGeneration();
  }, [currentStep, startGuestQuestionGeneration]);

  useEffect(() => {
    if (currentStep !== 1) return;
    if (!upload.file) {
      setIsRecordUploadComplete(false);
      lastUploadedFileKeyRef.current = null;
      return;
    }

    const currentFileKey = `${upload.file.name}-${upload.file.size}-${upload.file.lastModified}`;
    if (lastUploadedFileKeyRef.current === currentFileKey || isUploadingRecord) {
      return;
    }

    lastUploadedFileKeyRef.current = currentFileKey;

    const selectedFile = upload.file;
    const uploadAndParse = async () => {
      try {
        setIsUploadingRecord(true);
        setIsRecordUploadComplete(false);
        upload.setUploadingProgress(0);
        await uploadGuestRecordAndParse(selectedFile, (progress) => {
          upload.setUploadingProgress(progress);
        });
        upload.markUploadCompleted();
        setIsRecordUploadComplete(true);
        sessionStorage.setItem("guest_record_parsed", "true");
      } catch (error) {
        upload.markUploadFailed();
        const { message } = parseApiError(error);
        window.alert(message || "생기부 분석 중 오류가 발생했습니다.");
      } finally {
        setIsUploadingRecord(false);
      }
    };

    void uploadAndParse();
  }, [
    currentStep,
    isUploadingRecord,
    upload.file,
    upload.markUploadCompleted,
    upload.markUploadFailed,
    upload.setUploadingProgress,
  ]);

  const handleFinishOnboardQuestionGeneration = useCallback(() => {
    setCurrentStep(6);
  }, []);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <S.Step1Content>
            <OnboardSchoolRecordUpload
              upload={upload}
              onStartQuestionLoading={handleUploadStepNext}
              isSubmitting={isUploadingRecord}
              isReadyToProceed={isRecordUploadComplete}
            />
          </S.Step1Content>
        );
      case 2:
        return (
          <S.Step2Content>
            <SchoolSelect
              school={onboardFormData.school}
              onSchoolChange={handleSchoolChange}
              onNext={handleSchoolStepNext}
            />
          </S.Step2Content>
        );
      case 3:
        return (
          <S.Step3Content>
            <DepartmentSelect
              school={onboardFormData.school}
              department={onboardFormData.department}
              onDepartmentChange={handleDepartmentChange}
              onNext={handleDepartmentStepNext}
            />
          </S.Step3Content>
        );
      case 4:
        return (
          <S.Step3Content>
            <ApplicationTypeSelect
              applicationType={onboardFormData.applicationType}
              onApplicationTypeChange={handleApplicationTypeChange}
              onNext={handleApplicationTypeStepNext}
            />
          </S.Step3Content>
        );
      case 5:
        return (
          <S.Step4LoadingOuter>
            <S.Step4LoadingInner>
              <OnboardQuestionGenerating
                progress={questionProgress}
                isComplete={isQuestionComplete}
                onLoadingComplete={handleFinishOnboardQuestionGeneration}
              />
            </S.Step4LoadingInner>
          </S.Step4LoadingOuter>
        );
      case 6:
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
        <OnboardProgressBar totalSteps={6} currentStep={currentStep} />
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
