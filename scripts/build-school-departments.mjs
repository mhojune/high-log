/**
 * 엑셀 → src/constants/schoolDepartments.data.ts 생성
 *
 * 엑셀 형식:
 * - 각 열(column) 1행(첫 줄) = 학교 이름
 * - 그 아래 행 = 해당 학교 학과 (빈 칸이 나올 때까지 같은 열)
 *
 * 사용법:
 *   npm run build:schools
 *   npm run build:schools -- path/to/file.xlsx
 *
 * 기본 입력: data/school-departments.xlsx
 */
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const defaultInput = path.join(root, "data", "school-departments.xlsx");
const outputFile = path.join(root, "src", "constants", "schoolDepartments.data.ts");

const inputPath = process.argv[2] ? path.resolve(process.argv[2]) : defaultInput;

if (!fs.existsSync(inputPath)) {
  console.error(`입력 파일이 없습니다: ${inputPath}`);
  console.error("엑셀을 data/school-departments.xlsx 로 두거나, 경로를 인자로 넘기세요.");
  process.exit(1);
}

const workbook = XLSX.readFile(inputPath);
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
/** @type {unknown[][]} */
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: "" });

if (!rows.length) {
  console.error("시트가 비어 있습니다.");
  process.exit(1);
}

const headerRow = rows[0];
const numCols = Math.max(...rows.map((r) => (Array.isArray(r) ? r.length : 0)), headerRow?.length ?? 0);

/** @type {Record<string, string[]>} */
const map = {};

for (let c = 0; c < numCols; c++) {
  const school = String(headerRow?.[c] ?? "").trim();
  if (!school) continue;

  const departments = [];
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    if (!row) continue;
    const cell = row[c];
    const name = cell != null ? String(cell).trim() : "";
    if (name) departments.push(name);
  }

  if (map[school]) {
    map[school] = [...map[school], ...departments];
  } else {
    map[school] = departments;
  }
}

const keys = Object.keys(map);
if (keys.length === 0) {
  console.error("학교 이름이 있는 열을 찾지 못했습니다. 1행에 학교명이 있는지 확인하세요.");
  process.exit(1);
}

const body = keys
  .sort((a, b) => a.localeCompare(b, "ko"))
  .map((school) => {
    const depts = map[school].map((d) => JSON.stringify(d)).join(", ");
    return `  ${JSON.stringify(school)}: [${depts}],`;
  })
  .join("\n");

const relInput = path.relative(root, inputPath).replace(/\\/g, "/");
const fileContent = `/**
 * 학교·학과 목록 (엑셀에서 자동 생성 — 직접 수정하지 마세요)
 * 생성: npm run build:schools
 * 소스: ${relInput}
 */
export const SCHOOL_DEPARTMENTS_MAP: Record<string, string[]> = {
${body}
};
`;

fs.writeFileSync(outputFile, fileContent, "utf8");
console.log(`작성 완료: src/constants/schoolDepartments.data.ts (${keys.length}개 학교)`);
