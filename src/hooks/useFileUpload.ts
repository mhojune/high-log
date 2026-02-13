import { useState, useEffect, useCallback } from "react";

export type UploadStatus = 'idle' | 'uploading' | 'completed' | 'disabled';

export function useFileUpload() {
    const [file, setFile] = useState<File | null>(null);
    const [status, setStatus] = useState<UploadStatus>('idle');
    const [progress, setProgress] = useState<number>(0);

    const handleFileSelect = useCallback((selectedFile: File) => {
        setFile(selectedFile);
        setStatus('uploading');
        setProgress(0);
    }, []);

    const handleRemoveFile = useCallback(() => {
        setFile(null);
        setStatus('idle');
        setProgress(0);
    }, []);


    useEffect(() => {
        if (status === 'uploading') {
            const timer = setInterval(() => {
                setProgress((prev) => {
                    if (prev >= 100) {
                        clearInterval(timer);
                        setStatus('completed');
                        return 100;
                    }
                    return prev + 10;
                });
            }, 200);
            return () => clearInterval(timer);
        }
    }, [status]);

    return {
        file,
        status,
        progress,
        handleFileSelect,
        handleRemoveFile
    };
}
