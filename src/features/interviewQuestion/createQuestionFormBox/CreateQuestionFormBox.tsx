import { useState, useImperativeHandle, forwardRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "@/features/interviewQuestion/createQuestionFormBox/CreateQuestionFormBox.styles";
import { DefaultButton } from "@/components/button/Button";
import XIcon from "@/assets/icons/x.svg?react";
import CircleQuestionMark from "@/assets/icons/circle_question_mark.svg?react";
import DropDown from "@/components/input/DropDown";
import RadioBox from "@/components/input/RadioBox";
import Modal from "@/components/modal/Modal";
import type { CreateQuestionFormData } from "@/features/interviewQuestion/types/createQuestion";
import { useRecordList } from "@/api/record/useRecordListApi";
import { useAuth } from "@/contexts/AuthContext";
import {
  SCHOOL_OPTIONS,
  getDepartmentOptionsForSchool,
} from "@/constants/schoolDepartments";

export interface CreateQuestionFormBoxRef {
  hasContent: () => boolean;
  clear: () => void;
}

const APPLICATION_TYPE_OPTIONS = [
  "학생부 종합 전형",
  "학생부 교과 전형",
  "특기자/실기 전형",
  "인적성/구술 전형",
  "학교 자체 전형",
];

interface CreateQuestionFormBoxProps {
  onSubmit: (data: CreateQuestionFormData) => void;
  onFormStateChange?: (hasContent: boolean) => void;
  onBackToMain?: () => void;
}

const CreateQuestionFormBox = forwardRef<
  CreateQuestionFormBoxRef,
  CreateQuestionFormBoxProps
>(function CreateQuestionFormBox({ onSubmit, onFormStateChange, onBackToMain }, ref) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [title, setTitle] = useState("");
  const [school, setSchool] = useState("");
  const [department, setDepartment] = useState("");
  const [applicationType, setApplicationType] = useState("");
  const [schoolRecord, setSchoolRecord] = useState("");
  const [isSchoolRecordHintOpen, setIsSchoolRecordHintOpen] = useState(false);

  const handleTitleChange = (value: string) => {
    setTitle(value);
    if (!value.trim()) {
      setSchool("");
      setDepartment("");
    }
  };

  const handleSchoolChange = (value: string) => {
    setSchool(value);
    setDepartment("");
  };

  const { data: recordListData, isSuccess: isRecordsSuccess } = useRecordList({
    enabled: isAuthenticated,
  });
  const records = recordListData?.records ?? [];
  const recordOptions = records.map((r) => r.title);
  const isNoRecordsModalOpen = isRecordsSuccess && records.length === 0;

  const departmentOptions = getDepartmentOptionsForSchool(school);

  const hasContent = !!(title || school || department || applicationType || schoolRecord);

  useImperativeHandle(ref, () => ({
    hasContent: () => hasContent,
    clear: () => {
      setTitle("");
      setSchool("");
      setDepartment("");
      setApplicationType("");
      setSchoolRecord("");
    },
  }));

  useEffect(() => {
    onFormStateChange?.(hasContent);
  }, [hasContent, onFormStateChange]);

  const handleSubmit = () => {
    const selectedRecord = records.find((r) => r.title === schoolRecord);
    if (!selectedRecord) {
      return; // 생기부 미선택 시 제출 방지
    }
    onSubmit({
      title,
      school,
      department,
      applicationType,
      schoolRecord,
      recordId: selectedRecord.id,
    });
  };

  return (
    <S.CreateFormBox>
      <S.FormBoxTitle>지원 정보를 입력해주세요</S.FormBoxTitle>
      <S.FormFieldGroups>
        <S.FormFieldGroup>
          <S.FormFieldRow>
            <S.FormFieldRowLabel>제목</S.FormFieldRowLabel>
            <S.FormFieldRowContent>
              <S.TitleInputWrapper>
                <S.TitleInputField
                  value={title}
                  onChange={(e) => handleTitleChange(e.target.value)}
                  placeholder="질문 기록 저장을 위한 제목을 입력해 주세요 ex) 한양대 면접용"
                />
                {title && (
                  <XIcon
                    width={24}
                    height={24}
                    stroke="#737373"
                    onClick={() => handleTitleChange("")}
                    style={{ cursor: "pointer" }}
                  />
                )}
              </S.TitleInputWrapper>
              <S.TitleInputCaption>
                제목은 최대 28자까지 입력할 수 있어요
              </S.TitleInputCaption>
            </S.FormFieldRowContent>
          </S.FormFieldRow>
        </S.FormFieldGroup>
        <S.FormFieldGroup>
          <S.SchoolDepartmentRow>
            <S.DropDownGroup>
              <S.FormFieldRowLabel>지원하는 학교</S.FormFieldRowLabel>
              <DropDown
                width="340px"
                options={SCHOOL_OPTIONS}
                value={school}
                setValue={handleSchoolChange}
                placeholder="학교를 입력해 주세요"
                disabled={!title.trim()}
              />
            </S.DropDownGroup>
            <S.DropDownGroup>
              <S.FormFieldRowLabel>학과</S.FormFieldRowLabel>
              <DropDown
                width="340px"
                options={departmentOptions}
                value={department}
                setValue={setDepartment}
                placeholder="학과를 입력해 주세요"
                disabled={!school}
              />
            </S.DropDownGroup>
          </S.SchoolDepartmentRow>
        </S.FormFieldGroup>
        <S.FormFieldGroup>
          <S.ApplicationTypeSection>
            <S.FormFieldRowLabel>면접 전형</S.FormFieldRowLabel>
            <S.ApplicationTypeContent>
              <S.ApplicationTypeRow>
                {APPLICATION_TYPE_OPTIONS.slice(0, 3).map((option) => (
                  <S.ApplicationTypeOption
                    key={option}
                    onClick={() => setApplicationType(option)}
                  >
                    <RadioBox
                      isChecked={applicationType === option}
                      onClick={() => setApplicationType(option)}
                    />
                    {option}
                  </S.ApplicationTypeOption>
                ))}
              </S.ApplicationTypeRow>
              <S.ApplicationTypeRow>
                {APPLICATION_TYPE_OPTIONS.slice(3, 5).map((option) => (
                  <S.ApplicationTypeOption
                    key={option}
                    onClick={() => setApplicationType(option)}
                  >
                    <RadioBox
                      isChecked={applicationType === option}
                      onClick={() => setApplicationType(option)}
                    />
                    {option}
                  </S.ApplicationTypeOption>
                ))}
              </S.ApplicationTypeRow>
            </S.ApplicationTypeContent>
          </S.ApplicationTypeSection>
        </S.FormFieldGroup>
      </S.FormFieldGroups>
      <S.FormBoxSubTitleRow>
        <S.FormBoxSubTitle>학교 생활 기록부를 선택해주세요</S.FormBoxSubTitle>
        <S.SchoolRecordHintWrapper>
          <S.SchoolRecordHintPopoverCluster
            $open={isSchoolRecordHintOpen}
            role="presentation"
          >
            <S.SchoolRecordHintPopover role="tooltip">
              <S.SchoolRecordHintPopoverLead>
                생기부 관리 페이지에서 파일을 업로드 해보세요
              </S.SchoolRecordHintPopoverLead>
              <S.SchoolRecordHintPopoverSub>
                등록한 생기부는 언제든 면접 질문 생성에 사용할 수 있어요
              </S.SchoolRecordHintPopoverSub>
              <S.SchoolRecordHintPopoverButtonRow>
                <S.SchoolRecordHintPopoverButtonWrap>
                  <DefaultButton
                    width={108}
                    type="secondary"
                    text="업로드하러 가기"
                    onClick={() => {
                      setIsSchoolRecordHintOpen(false);
                      navigate("/record_management");
                    }}
                  />
                </S.SchoolRecordHintPopoverButtonWrap>
              </S.SchoolRecordHintPopoverButtonRow>
            </S.SchoolRecordHintPopover>
            <S.SchoolRecordHintPopoverArrowRow>
              <S.SchoolRecordHintPopoverArrow aria-hidden />
            </S.SchoolRecordHintPopoverArrowRow>
          </S.SchoolRecordHintPopoverCluster>
          <S.SchoolRecordHint
            aria-expanded={isSchoolRecordHintOpen}
            onClick={() => setIsSchoolRecordHintOpen((prev) => !prev)}
          >
            <S.SchoolRecordHintIcon aria-hidden>
              <CircleQuestionMark />
            </S.SchoolRecordHintIcon>
            <S.SchoolRecordHintText>원하는 생기부가 없나요?</S.SchoolRecordHintText>
          </S.SchoolRecordHint>
        </S.SchoolRecordHintWrapper>
      </S.FormBoxSubTitleRow>
      <S.SchoolRecordRow>
        <S.FormFieldRowLabel>생기부 선택</S.FormFieldRowLabel>
        <S.SchoolRecordDropDownWrapper>
          <DropDown
            width="100%"
            options={recordOptions}
            value={schoolRecord}
            setValue={setSchoolRecord}
            placeholder="생기부를 선택해 주세요"
          />
        </S.SchoolRecordDropDownWrapper>
      </S.SchoolRecordRow>
      <S.FormFieldButton>
        <DefaultButton
          width={174}
          type={schoolRecord ? "primary" : "disabled"}
          text="질문 생성하기"
          onClick={handleSubmit}
        />
      </S.FormFieldButton>
      <Modal
        isOpen={isNoRecordsModalOpen}
        onClose={() => onBackToMain?.()}
        mainTitle="먼저 생기부를 업로드 해주세요"
        subTitle="질문 생성을 위해 생기부가 필요해요"
        leftButtonText="닫기"
        rightButtonText="업로드 하기"
        onLeftButtonClick={() => onBackToMain?.()}
        onRightButtonClick={() => navigate("/record_management")}
      />
    </S.CreateFormBox>
  );
});

export default CreateQuestionFormBox;
