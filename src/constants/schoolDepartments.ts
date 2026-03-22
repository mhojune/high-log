import { SCHOOL_DEPARTMENTS_MAP } from "./schoolDepartments.data";

/** 지원 학교 드롭다운 옵션 (가나다순) */
export const SCHOOL_OPTIONS = Object.keys(SCHOOL_DEPARTMENTS_MAP).sort((a, b) =>
  a.localeCompare(b, "ko")
);

/** 선택한 학교에 해당하는 학과 목록 */
export function getDepartmentOptionsForSchool(school: string): string[] {
  if (!school) return [];
  return SCHOOL_DEPARTMENTS_MAP[school] ?? [];
}
