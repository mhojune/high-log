# 학교·학과 엑셀

## 파일 위치

엑셀 파일(`.xlsx`)을 **프로젝트 루트의 `data` 폴더**에 두고 이름을 다음 중 하나로 맞춥니다.

| 파일명 | 설명 |
|--------|------|
| **`school-departments.xlsx`** | `npm run build:schools` 실행 시 기본으로 읽는 파일 |

다른 경로/이름을 쓰려면:

```bash
npm run build:schools -- "C:\Users\내이름\Desktop\학교학과.xlsx"
```

## 엑셀 형식

- **첫 번째 시트**만 사용합니다.
- **각 열(column)**마다:
  - **1행** = 그 열의 **학교 이름**
  - **2행부터** = 해당 학교의 **학과 이름** (한 행에 하나씩, 빈 칸이 나올 때까지)

예 (A열 서울대, B열 연세대 …):

| A (1행)     | B (1행)     |
|-------------|-------------|
| 서울대학교   | 연세대학교   |
| 컴퓨터공학과 | 경영학과     |
| 전자공학과   | 의예과       |

## 데이터 반영 방법

프로젝트 루트에서 (**콜론 `:` 하나** — `build::schools` 아님):

```bash
npm run build:schools
```

`university.xlsx` 등 다른 이름이면:

```bash
npm run build:schools -- data/university.xlsx
```

실행 후 `src/constants/schoolDepartments.data.ts`가 갱신됩니다.  
앱은 이 파일을 읽으므로, 빌드/개발 서버를 다시 띄우거나 저장 후 HMR로 반영됩니다.
