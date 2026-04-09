import { DefaultButton } from "@/components/button/Button";
import CheckBox from "@/components/input/CheckBox";
import DefaultInput from "@/components/input/DefaultInput";
import FileUpload from "@/features/recordManagement/FileUpload";
import RecordCard from "@/components/card/RecordCard";
import * as S from "@/pages/recordManagement/detail/RecordDetail.styles";
import { useParams } from "react-router-dom";
import { UnderBarButton } from "@/components/button/Button";
import Modal from "@/components/modal/Modal";
import Toast from "@/components/toast/Toast";
import { useRecordDetail } from "@/hooks/useRecordDetail";
import { useRecordDetail as useApiRecordDetail } from "@/api/record/useRecordDetailApi";
import EmptyState from "@/components/common/emptyState/EmptyState";
import FILE_NONE from "@/assets/icons/file_x.svg?react";
import type { RecordDetail as RecordDetailType } from "@/api/record/recordTypes";

function RecordDetailContent({ record }: { record: RecordDetailType }) {
  const { id } = useParams<{ id: string }>();
  const {
    text,
    setText,
    isChecked,
    setIsChecked,
    fileStatus,
    uploadedFileName,
    isModalOpen,
    isToastOpen,
    toastMessage,
    handleSave,
    handleFileRemove,
    handleDeleteClick,
    handleDeleteConfirm,
    handleModalClose,
    handleToastClose,
    navigate,
    handleFileSelect,
    isUploading,
  } = useRecordDetail(record);

  const initialQuestion = record.questionSets?.length || 0;

  return (
    <>
      <S.DetailBox>
        <S.Title>{text}</S.Title>
        <S.RecordDetailWrapper>
          <S.DetailContentWrapper>
            <S.TitleDetailBox>
              <S.TitleTermBox>
                <S.InputTitleBox>
                  <S.InputTitle>
                    <S.Lable>제목</S.Lable>
                    <S.InputWithButton>
                      <DefaultInput
                        text={text}
                        setText={setText}
                        placeholder="생기부 제목을 입력해주세요"
                      />
                      <DefaultButton
                        width={72}
                        type={isUploading ? "disabled" : "secondary"}
                        text="저장"
                        onClick={handleSave}
                      />
                    </S.InputWithButton>
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
            </S.TitleDetailBox>
          </S.DetailContentWrapper>
          <S.FileDeleteBox>
            <FileUpload
              text="이곳에 파일을 업로드해주세요"
              subText="HTML, PDF 파일만 업로드 할 수 있어요"
              status={initialQuestion > 0 ? "disabled" : fileStatus}
              fileName={record.filename || uploadedFileName}
              onRemove={handleFileRemove}
              onFileSelect={handleFileSelect}
            />
            <UnderBarButton
              text={"해당 생기부 삭제하기"}
              onClick={handleDeleteClick}
            />
          </S.FileDeleteBox>
        </S.RecordDetailWrapper>
        {record.questionSets && record.questionSets.length > 0 ? (
          <>
            <S.QuestionTitle>생성된 질문 기록</S.QuestionTitle>
            <S.QuestionBox>
              {record.questionSets.map((item) => {
                return (
                  <RecordCard
                    text={item.title}
                    key={item.id}
                    onClick={() => {
                      navigate(`/record_detail/${id}/question_list`);
                    }}
                  />
                );
              })}
            </S.QuestionBox>
          </>
        ) : (
          <></>
        )}
      </S.DetailBox>
      <DefaultButton
        width={174}
        type="secondary"
        text="목록"
        onClick={() => navigate("/record_management")}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        mainTitle="등록된 생기부를 삭제 하시겠습니까?"
        subTitle="한 번 삭제하면 복구할 수 없어요"
        leftButtonText="돌아가기"
        rightButtonText="삭제하기"
        onLeftButtonClick={handleModalClose}
        onRightButtonClick={handleDeleteConfirm}
      />

      <Toast
        message={toastMessage}
        isOpen={isToastOpen}
        onClose={handleToastClose}
      />
    </>
  );
}

export default function RecordDetail() {
  const { id } = useParams<{ id: string }>();
  const recordId = Number(id);
  const {
    data: initialRecord,
    isLoading,
    isError,
  } = useApiRecordDetail(recordId);

  // Error handling if id is invalid or fetch fails
  if (!id || isNaN(recordId)) {
    // You might want to redirect or show a 404 here
    return null;
  }

  if (isLoading) {
    return (
      <S.RecordDetailContainer>
        <EmptyState
          icon={<FILE_NONE width={48} height={48} />}
          title="로딩 중..."
          subtitle="생기부 상세 정보를 불러오고 있습니다"
        />
      </S.RecordDetailContainer>
    );
  }

  if (isError || !initialRecord) {
    return (
      <S.RecordDetailContainer>
        <EmptyState
          icon={<FILE_NONE width={48} height={48} />}
          title="오류 발생"
          subtitle="생기부를 불러올 수 없습니다."
        />
      </S.RecordDetailContainer>
    );
  }

  return (
    <S.RecordDetailContainer>
      <RecordDetailContent record={initialRecord} key={initialRecord.id} />
    </S.RecordDetailContainer>
  );
}
