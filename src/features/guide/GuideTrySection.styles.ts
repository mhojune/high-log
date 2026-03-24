import styled from "styled-components";

export const GuideTrySectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1200px;
  height: 123px;
  padding: 40px 0;
  box-sizing: border-box;
`;

export const GuideTryTitle = styled.h3`
  ${({ theme }) => theme.typography.head.H3};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const GuideTryButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;
