import { DefaultButton } from "@/components/button/Button";
import CheckBox from "@/components/input/CheckBox";
import DefaultInput from "@/components/input/DefaultInput";
import Title from "@/components/title/Title";
import FileUpload from "@/features/recordManagement/FileUpload";
import { useFileUpload } from "@/hooks/useFileUpload";
import * as S from "@/pages/recordManagement/upload/RecordUpload.styles";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecordUpload } from "@/api/record/useRecordUploadApi";
import { parseApiError } from "@/api/client";

export default function RecordUpload() {
  const navigate = useNavigate();
  const [text, setText] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [vectorizeProgress, setVectorizeProgress] = useState<number>(0);

  const { file, status, handleFileSelect, handleRemoveFile } = useFileUpload();

  const uploadMutation = useRecordUpload();

  const isSubmitting = uploadMutation.isPending;

  const handleSubmit = async () => {
    setSubmitError(null);
    setVectorizeProgress(0);
    if (!file) {
      setSubmitError("파일을 선택해 주세요.");
      return;
    }
    if (!text.trim()) {
      setSubmitError("제목을 입력해 주세요.");
      return;
    }
    if (!isChecked) {
      setSubmitError("약관에 동의해 주세요.");
      return;
    }
    try {
      await uploadMutation.mutateAsync({
        file,
        title: text,
        onProgress: setVectorizeProgress,
      });
      navigate("/record_management", { state: { upload_complete: true } });
    } catch (err) {
      setSubmitError(parseApiError(err).message);
    }
  };

  useEffect(() => {
    console.log(vectorizeProgress);
  }, [vectorizeProgress]);

  return (
    <S.RecordUploadContainer>
      <S.RecordUploadWrapper>
        <Title text="생기부 업로드" />
        <S.UploadBox>
          <S.UploadSubmitWrapper>
            <S.TitleUploadBox>
              <S.TitleTermBox>
                <S.Title>면접을 준비할 생기부를 업로드해 주세요</S.Title>
                <S.InputTitleBox>
                  <S.InputTitle>
                    <S.Lable>제목</S.Lable>
                    <DefaultInput
                      text={text}
                      setText={setText}
                      placeholder="업로드할 생기부 제목을 설정해 주세요 ex) 000의 생기부"
                    />
                  </S.InputTitle>
                  <S.Caption>제목은 최대 28자까지 입력할 수 있어요</S.Caption>
                </S.InputTitleBox>
                <S.TermBox>
                  <S.Lable>약관 동의</S.Lable>
                  <S.CheckTextBox>
                    <S.CheckBox>
                      <CheckBox
                        isChecked={isChecked}
                        onClick={() => setIsChecked(!isChecked)}
                      />
                      <S.CheckTitle>개인정보 수집 및 이용 동의</S.CheckTitle>
                    </S.CheckBox>
                    <S.CheckSubTitle>
                      [필수] 본인은 위 내용을 충분히 숙지하였으며, 해당 사항에
                      동의하고 이에 따른 모든 책임은 본인에게 있음을 확인합니다.
                    </S.CheckSubTitle>
                  </S.CheckTextBox>
                </S.TermBox>
              </S.TitleTermBox>
              <FileUpload
                text="이곳에 파일을 업로드해주세요"
                subText="HTML, PDF 파일만 업로드 할 수 있어요"
                status={isSubmitting ? "uploading" : status}
                progress={isSubmitting ? vectorizeProgress : 0}
                fileName={file?.name}
                onFileSelect={handleFileSelect}
                onRemove={handleRemoveFile}
              />
            </S.TitleUploadBox>
          </S.UploadSubmitWrapper>
          {submitError && <S.ErrorText>{submitError}</S.ErrorText>}
          <DefaultButton
            width={174}
            type={!file || isSubmitting ? "disabled" : "primary"}
            text={"저장하기"}
            onClick={() => {
              if (isSubmitting) return;
              handleSubmit();
            }}
          />
        </S.UploadBox>
      </S.RecordUploadWrapper>
    </S.RecordUploadContainer>
  );
}
