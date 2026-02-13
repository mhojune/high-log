import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RECORDS_DUMMY_DATA } from "@/constants/records";

export function useRecordDetail(id: string | undefined) {
    const navigate = useNavigate();
    const recordId = Number(id);
    const initialRecord = RECORDS_DUMMY_DATA.find(record => record.id === recordId);

    const [text, setText] = useState<string>(initialRecord?.title || "");
    const [isChecked, setIsChecked] = useState<boolean>(true);
    const [fileStatus, setFileStatus] = useState<'idle' | 'completed' | 'disabled'>(initialRecord?.fileName ? 'completed' : 'idle');
    const [uploadedFileName, setUploadedFileName] = useState<string>(initialRecord?.fileName || "");
    
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [isToastOpen, setIsToastOpen] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>("");

    useEffect(() => {
        if (!initialRecord) {
            navigate("/record_management");
        }
    }, [initialRecord, navigate]);

    const handleSave = useCallback(() => {

        console.log("Saving:", { text, isChecked, uploadedFileName });
        setToastMessage("변경 내용이 저장되었습니다");
        setIsToastOpen(true);
        setTimeout(() => setIsToastOpen(false), 3000);
    }, [text, isChecked, uploadedFileName]);

    const handleFileRemove = useCallback(() => {
        if (initialRecord) {
            console.log("Removing file for record:", initialRecord.id);
        }
        setUploadedFileName("");
        setFileStatus('idle');
    }, [initialRecord]);

    const handleDeleteClick = useCallback(() => {
        setIsModalOpen(true);
    }, []);

    const handleDeleteConfirm = useCallback(() => {
        setIsModalOpen(false);
        setToastMessage("삭제가 완료되었습니다");
        setIsToastOpen(true);
        setTimeout(() => {
            setIsToastOpen(false);
            navigate("/record_management");
        }, 1500);
    }, [navigate]);

    const handleModalClose = useCallback(() => {
        setIsModalOpen(false);
    }, []);

    const handleToastClose = useCallback(() => {
        setIsToastOpen(false);
    }, []);

    return {
        initialRecord,
        text, setText,
        isChecked, setIsChecked,
        fileStatus, setFileStatus,
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
        navigate
    };
}
