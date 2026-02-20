import { DefaultButton } from "@/components/button/Button";
import DropDown from "@/components/input/DropDown";
import Modal from "@/components/modal/Modal";
import Title from "@/components/title/Title";
import * as S from "@/features/interviewPractice/PracticeStep1.styles";
import { useState, useMemo } from "react";
import { useRecordList } from "@/api/record/useRecordListApi";

interface PracticeStep1Props {
  onSettingsComplete: (
    recordId: number,
    difficulty: "Easy" | "Normal" | "Hard",
    mode: "text" | "voice",
    // initialResponse: InterviewChatResponse // Removed
  ) => void;
}

export default function PracticeStep1({
  onSettingsComplete,
}: PracticeStep1Props) {
  const [report, setReport] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [mode, setMode] = useState<string>("텍스트");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    mainTitle: "",
    subTitle: "",
  });

  const {
    data: recordListData,
    isLoading: isRecordListLoading,
    isError: isRecordListError,
    error: recordListError,
  } = useRecordList();

  const reportOptions = useMemo(() => {
    if (!recordListData) return [];
    return recordListData.records.map((record) => ({
      label: record.title,
      value: record.id,
    }));
  }, [recordListData]);

  const levelOptions = [
    { label: "기본", value: "Easy" },
    { label: "심화", value: "Normal" },
    { label: "압박", value: "Hard" },
  ];
  const modeOptions = [{ label: "텍스트", value: "text" }];

  const handleStart = () => {
    const selectedReport = reportOptions.find((opt) => opt.label === report);
    const selectedLevel = levelOptions.find((opt) => opt.label === level);
    const selectedMode = modeOptions.find((opt) => opt.label === mode); // Should always be "텍스트"

    if (!selectedReport || !selectedLevel || !selectedMode) {
      setModalMessage({
        mainTitle: "선택하지 않은 항목이 있어요",
        subTitle: "필수 항목을 선택한 뒤 다시 시작해 주세요",
      });
      setIsModalOpen(true);
      return;
    }

    onSettingsComplete(
      selectedReport.value,
      selectedLevel.value as "Easy" | "Normal" | "Hard",
      selectedMode.value as "text" | "voice",
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handle record list loading/error states
  if (isRecordListLoading) {
    return (
      <S.Practice1Container>
        <Title text="면접 연습" />
        <S.PracticeSettingWrapper>
          <S.SettingBox>
            <S.SettingText>생기부 목록을 불러오는 중...</S.SettingText>
          </S.SettingBox>
        </S.PracticeSettingWrapper>
      </S.Practice1Container>
    );
  }

  if (isRecordListError) {
    return (
      <S.Practice1Container>
        <Title text="면접 연습" />
        <S.PracticeSettingWrapper>
          <S.SettingBox>
            <S.SettingText>
              생기부 목록을 불러오는데 실패했습니다: {recordListError?.message}
            </S.SettingText>
          </S.SettingBox>
        </S.PracticeSettingWrapper>
      </S.Practice1Container>
    );
  }

  return (
    <S.Practice1Container>
      <Title text="면접 연습" />
      <S.PracticeSettingWrapper>
        <S.SettingBox>
          <S.SettingText>면접 연습을 위해 설정을 완료해 주세요</S.SettingText>
          <S.SelectBox>
            <S.TopBox>
              <S.TitleSelect>
                <S.Title>연습할 생기부</S.Title>
                <S.DropDownWrapper>
                  <DropDown
                    width="340px"
                    options={reportOptions.map((opt) => opt.label)}
                    placeholder="등록된 생기부를 선택해 주세요"
                    value={report}
                    setValue={setReport}
                  />
                </S.DropDownWrapper>
              </S.TitleSelect>
              <S.TitleSelect>
                <S.Title>면접 난이도</S.Title>
                <S.DropDownWrapper>
                  <DropDown
                    width="340px"
                    options={levelOptions.map((opt) => opt.label)}
                    placeholder="난이도를 설정해 주세요"
                    value={level}
                    setValue={setLevel}
                  />
                </S.DropDownWrapper>
              </S.TitleSelect>
            </S.TopBox>
            <S.TitleSelect>
              <S.Title>면접 모드</S.Title>
              <S.DropDownWrapper>
                <DropDown
                  width="340px"
                  options={modeOptions.map((opt) => opt.label)}
                  placeholder="텍스트/음성을 설정해 주세요"
                  value={mode}
                  setValue={setMode}
                />
              </S.DropDownWrapper>
            </S.TitleSelect>
          </S.SelectBox>
        </S.SettingBox>
        <DefaultButton
          width={178}
          type="primary"
          text="연습 시작"
          onClick={handleStart}
        />
      </S.PracticeSettingWrapper>
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          mainTitle={modalMessage.mainTitle}
          subTitle={modalMessage.subTitle}
          leftButtonText="닫기"
          rightButtonText="확인"
          onLeftButtonClick={handleCloseModal}
          onRightButtonClick={handleCloseModal}
        />
      )}
    </S.Practice1Container>
  );
}
