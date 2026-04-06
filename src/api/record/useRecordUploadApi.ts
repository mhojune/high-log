import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getPresignedUrl,
  registerRecordAndStream,
  uploadFileToS3,
} from "@/api/record/recordUpload";

export interface RecordUploadVariables {
  file: File;
  title: string;
  filename: string;
  onProgress?: (progress: number) => void;
}

async function uploadRecord(variables: RecordUploadVariables): Promise<void> {
  const { file, title, onProgress } = variables;
  const { presignedUrl, s3Key } = await getPresignedUrl(file.name);
  await uploadFileToS3(presignedUrl, file);
  await registerRecordAndStream(
    { title: title.trim(), filename: file.name, s3Key },
    onProgress,
  );
}

export function useRecordUpload() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: uploadRecord,
    onSuccess: () => {
      console.log("[업로드 완료] 목록 갱신 시작");
      queryClient.invalidateQueries({ queryKey: ["records"] });
      queryClient.refetchQueries({ queryKey: ["records"] });
    },
  });
}
