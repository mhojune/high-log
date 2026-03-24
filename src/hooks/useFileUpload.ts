import { useState, useCallback } from "react";

export type UploadStatus = "idle" | "uploading" | "completed" | "disabled";

export function useFileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [progress, setProgress] = useState<number>(0);

  const handleFileSelect = useCallback((selectedFile: File) => {
    setFile(selectedFile);
    setStatus("completed");
    setProgress(0);
  }, []);

  const handleRemoveFile = useCallback(() => {
    setFile(null);
    setStatus("idle");
    setProgress(0);
  }, []);

  return {
    file,
    status,
    progress,
    handleFileSelect,
    handleRemoveFile,
  };
}
