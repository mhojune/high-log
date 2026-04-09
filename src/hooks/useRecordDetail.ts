import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDeleteRecord } from "@/api/record/useRecordDetailApi";
import { useRecordUpload } from "@/api/record/useRecordUploadApi";
import type { RecordDetail } from "@/api/record/recordTypes";

export function useRecordDetail(initialRecord: RecordDetail) {
  const navigate = useNavigate();
  const recordId = initialRecord.id;

  const { mutate: deleteRecordMutation, mutateAsync: deleteRecordAsync } =
    useDeleteRecord();
  const { mutateAsync: uploadRecordAsync, isPending: isUploading } =
    useRecordUpload();

  const [text, setText] = useState<string>(initialRecord.title);
  const [isChecked, setIsChecked] = useState<boolean>(true);
  const [fileStatus, setFileStatus] = useState<
    "idle" | "uploading" | "completed" | "disabled"
  >(initialRecord.status === "READY" ? "completed" : "idle");
  const [uploadedFileName, setUploadedFileName] = useState<string>(
    initialRecord.title,
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>("");
  const [newFile, setNewFile] = useState<File | null>(null);

  const handleFileSelect = useCallback((file: File) => {
    setNewFile(file);
    setUploadedFileName(file.name);
    setFileStatus("completed");
  }, []);

  const handleSave = useCallback(async () => {
    if (!text.trim()) {
      setToastMessage("제목을 입력해주세요.");
      setIsToastOpen(true);
      return;
    }

    if (!newFile) {
      setToastMessage("변경된 파일이 없습니다.");
      setIsToastOpen(true);
      return;
    }

    try {
      setFileStatus("uploading");

      await uploadRecordAsync({
        file: newFile,
        title: text,
        filename: newFile.name,
      });

      await deleteRecordAsync(recordId);

      setFileStatus("completed");
      setToastMessage("새로운 파일로 교체되었습니다.");
      setIsToastOpen(true);

      setTimeout(() => {
        setIsToastOpen(false);
        navigate("/record_management");
      }, 1500);
    } catch (e) {
      setFileStatus("idle");
      const errorMessage = e instanceof Error ? e.message : "알 수 없는 오류";
      setToastMessage(`저장 실패: ${errorMessage} (기존 생기부는 유지됩니다)`);
      setIsToastOpen(true);
    }
  }, [recordId, text, newFile, deleteRecordAsync, uploadRecordAsync, navigate]);

  const handleFileRemove = useCallback(() => {
    if (initialRecord) {
      console.log("Removing file for record:", initialRecord.id);
    }
    setNewFile(null);
    setUploadedFileName("");
    setFileStatus("idle");
  }, [initialRecord]);

  const handleDeleteClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleDeleteConfirm = useCallback(() => {
    if (recordId) {
      deleteRecordMutation(recordId, {
        onSuccess: () => {
          setIsModalOpen(false);
          setToastMessage("삭제가 완료되었습니다");
          setIsToastOpen(true);
          setTimeout(() => {
            setIsToastOpen(false);
            navigate("/record_management");
          }, 1500);
        },
        onError: (error) => {
          setIsModalOpen(false);
          setToastMessage(`삭제 실패: ${error.message}`);
          setIsToastOpen(true);
          setTimeout(() => setIsToastOpen(false), 3000);
        },
      });
    }
  }, [recordId, deleteRecordMutation, navigate]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleToastClose = useCallback(() => {
    setIsToastOpen(false);
  }, []);

  return {
    initialRecord,
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
  };
}
