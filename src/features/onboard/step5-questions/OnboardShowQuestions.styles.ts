import styled from "styled-components";
import * as ShowQuestionsS from "@/features/interviewQuestion/showQuestions/ShowQuestions.styles";

export { Title, Highlight } from "@/features/onboard/step1-school/SchoolSelect.styles";

export const HeadlineSection = styled.div`
  width: 100%;
`;

/** 서브타이틀 하단 ~ 탭·질문 목록까지 48px */
export const QuestionResultBlock = styled.div`
  margin-top: 48px;
  width: 100%;
`;

/** 온보딩만 — 탭(교과 성적 등) 가로 중앙 정렬, 상단 간격은 QuestionResultBlock만 사용 */
export const OnboardTabContainer = styled(ShowQuestionsS.TabContainer)`
  margin-top: 0;
  justify-content: center;
  flex-wrap: wrap;
`;

export const QuestionList = ShowQuestionsS.QuestionList;

/** 블러 미리보기 카드 아래 페이지 하단 여백 */
export const BlurQuestionList = styled(ShowQuestionsS.QuestionList)`
  margin-bottom: 96px;
`;

export const QuestionCardWrapper = ShowQuestionsS.QuestionCardWrapper;
export const TabItem = ShowQuestionsS.TabItem;

export const Subtitle = styled.p`
  margin: 8px 0 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayScale["03"]};
  ${({ theme }) => theme.typography.body.L1};
`;
