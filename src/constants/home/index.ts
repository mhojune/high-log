import QUESTION_STAT from "@/assets/images/question_stat.svg";
import USERS_STAT from "@/assets/images/users_stat.svg";
import PRACTICE_STAT from "@/assets/images/practice_stat.svg";

export interface StatData {
  questionCount: number;
  userCount: number;
  practiceCount: number;
}

export interface StatConfigItem {
  id: number;
  label: string;
  key: keyof StatData;
  img: string;
  unit: string;
}

export const STAT_CONFIG: StatConfigItem[] = [
  {
    id: 1,
    label: "생성된 질문",
    key: "questionCount",
    img: QUESTION_STAT,
    unit: "건",
  },
  {
    id: 2,
    label: "이용자 수",
    key: "userCount",
    img: USERS_STAT,
    unit: "명",
  },
  {
    id: 3,
    label: "누적 면접 연습",
    key: "practiceCount",
    img: PRACTICE_STAT,
    unit: "건",
  },
];

export const BEFORE_CARDS = [
    { title: "막연한 준비", sub: "”뭘 해야하지?”" },
    { title: "비싼 학원비", sub: "월 50만원 +" },
    { title: "시간/ 장소 제약", sub: "학원 방문 필수" },
    { title: "모두에게 똑같은", sub: "획일적 질문" },
];

export const AFTER_CARDS = [
    { title: "체계적인 가이드", sub: "단계별 로드맵", color: "rgba(105, 105, 244, 0.80)" },
    { title: "합리적인 비용", sub: "무료 이용 가능", color: "rgba(76, 76, 240, 0.80)" },
    { title: "언제 어디서나", sub: "온라인/모바일", color: "rgba(54, 54, 218, 0.80)" },
    { title: "나만의 맞춤 질문", sub: "AI 생기부 분석", color: "rgba(40, 23, 192, 0.80)" },
];

export interface ReviewData {
  id: number;
  text: string;
  from: string;
}

export const REVIEW_CARDS: ReviewData[] = [
  {
      id: 1,
      text: "“면접 준비를 어떻게 해야할지 고민했는데,\n제 생기부에 맞는 예상 질문만 뽑아줘서 좋아요.”",
      from: "XX고등학교 김OO 학생",
  },
  {
      id: 2,
      text: "“면접 준비를 어떻게 해야할지 고민했는데,\n제 생기부에 맞는 예상 질문만 뽑아줘서 좋아요.”",
      from: "XX고등학교 김OO 학생",
  },
  {
      id: 3,
      text: "“면접 준비를 어떻게 해야할지 고민했는데,\n제 생기부에 맞는 예상 질문만 뽑아줘서 좋아요.”",
      from: "XX고등학교 김OO 학생",
  },{
      id: 4,
      text: "“면접 준비를 어떻게 해야할지 고민했는데,\n제 생기부에 맞는 예상 질문만 뽑아줘서 좋아요.”",
      from: "XX고등학교 김OO 학생",
  },
  {
      id: 5,
      text: "“면접 준비를 어떻게 해야할지 고민했는데,\n제 생기부에 맞는 예상 질문만 뽑아줘서 좋아요.”",
      from: "XX고등학교 김OO 학생",
  },
  {
      id: 6,
      text: "“면접 준비를 어떻게 해야할지 고민했는데,\n제 생기부에 맞는 예상 질문만 뽑아줘서 좋아요.”",
      from: "XX고등학교 김OO 학생",
  },
  {
      id: 7,
      text: "“면접 준비를 어떻게 해야할지 고민했는데,\n제 생기부에 맞는 예상 질문만 뽑아줘서 좋아요.”",
      from: "XX고등학교 김OO 학생",
  },
  {
      id: 8,
      text: "“면접 준비를 어떻게 해야할지 고민했는데,\n제 생기부에 맞는 예상 질문만 뽑아줘서 좋아요.”",
      from: "XX고등학교 김OO 학생",
  },{
      id: 9,
      text: "“면접 준비를 어떻게 해야할지 고민했는데,\n제 생기부에 맞는 예상 질문만 뽑아줘서 좋아요.”",
      from: "XX고등학교 김OO 학생",
  },
  {
      id: 10,
      text: "“면접 준비를 어떻게 해야할지 고민했는데,\n제 생기부에 맞는 예상 질문만 뽑아줘서 좋아요.”",
      from: "XX고등학교 김OO 학생",
  }
];

