import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getRecordDetail, deleteRecord } from "./recordDetailApi";
import type { RecordDetail } from "./recordTypes";

export const useRecordDetail = (recordId: number) => {
  return useQuery<RecordDetail, Error>({
    queryKey: ["recordDetail", recordId],
    queryFn: () => getRecordDetail(recordId),
    enabled: !!recordId,
  });
};

export const useDeleteRecord = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>({
    mutationFn: (recordId: number) => deleteRecord(recordId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["records"] });
    },
  });
};
