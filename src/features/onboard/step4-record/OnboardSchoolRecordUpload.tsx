import { DefaultButton } from "@/components/button/Button";
import FileUpload from "@/features/recordManagement/FileUpload";
import { useFileUpload } from "@/hooks/useFileUpload";
import * as S from "@/features/onboard/step4-record/OnboardSchoolRecordUpload.styles";

type UploadApi = ReturnType<typeof useFileUpload>;

interface OnboardSchoolRecordUploadProps {
  upload: UploadApi;
  onStartQuestionLoading: () => void;
}

export default function OnboardSchoolRecordUpload({
  upload,
  onStartQuestionLoading,
}: OnboardSchoolRecordUploadProps) {
  const { file, status, progress, handleFileSelect, handleRemoveFile } = upload;

  const showQuestionsButton = status === "completed" && file;

  return (
    <S.Wrapper>
      <S.Title>
        면접을 준비하는 <S.Highlight>생활기록부</S.Highlight>를 업로드해 주세요
      </S.Title>
      <S.UploadSection>
        <FileUpload
          text="이곳에 파일을 업로드해주세요"
          subText="HTML, PDF 파일만 업로드 할 수 있어요"
          status={status}
          progress={progress}
          fileName={file?.name}
          onFileSelect={handleFileSelect}
          onRemove={handleRemoveFile}
        />
        {showQuestionsButton && (
          <S.ActionRow>
            <DefaultButton
              width={151}
              type="primary"
              text="내 질문 보기"
              onClick={onStartQuestionLoading}
            />
          </S.ActionRow>
        )}
      </S.UploadSection>
    </S.Wrapper>
  );
}
