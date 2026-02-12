import StudentReport from "@/features/recordManagement/StudentReport";
import * as S from "@/pages/recordManagement/RecordManagement.styles"

export default function RecordManagement() {
  return (
    <S.RecordManagementCotainer>
      <StudentReport />
    </S.RecordManagementCotainer>
  );
};
