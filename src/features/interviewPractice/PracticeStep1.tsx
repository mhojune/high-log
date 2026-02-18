import { DefaultButton } from "@/components/button/Button";
import DropDown from "@/components/input/DropDown";
import Modal from "@/components/modal/Modal";
import Title from "@/components/title/Title";
import * as S from "@/features/interviewPractice/PracticeStep1.styles";
import { useState } from "react";

interface PracticeStep1Props {
  onNext: () => void;
}

export default function PracticeStep1({ onNext }: PracticeStep1Props) {
  const [report, setReport] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [mode, setMode] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const reportOptions = ["2024년 1학기 생기부", "2023년 2학기 생기부"];
  const levelOptions = ["기본", "심화", "압박"];
  const modeOptions = ["텍스트", "음성"];

  const handleStart = () => {
    if (report && level && mode) {
      onNext();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
                    options={reportOptions}
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
                    options={levelOptions}
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
                  options={modeOptions}
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
          mainTitle="선택하지 않은 항목이 있어요"
          subTitle="필수 항목을 선택한 뒤 다시 시작해 주세요"
          leftButtonText="닫기"
          rightButtonText="확인"
          onLeftButtonClick={handleCloseModal}
          onRightButtonClick={handleCloseModal}
        />
      )}
    </S.Practice1Container>
  );
}
