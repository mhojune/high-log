import styled from "styled-components";

export const GuideTitleSectionContainer = styled.section`
  width: 100%;
  height: 295px;
  padding: 87px 0 86px 120px;
  border-radius: 0 12px 12px 0;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.secondary["09"]} 0%,
    ${({ theme }) => theme.colors.secondary["08"]} 50%,
    ${({ theme }) => theme.colors.secondary["06"]} 100%
  );
`;

export const TitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.typography.head.H1};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const SubtitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.body.L1};
  color: ${({ theme }) => theme.colors.grayScale["04"]};
`;
