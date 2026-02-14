import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 1440px;
  min-height: calc(100vh - 89px);
  padding: 96px 120px 108px;
  background-color: ${({ theme }) => theme.colors.grayScale["10"]};
  box-sizing: border-box;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CreateHeaderSection = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 8px;
`;

export const TitleAccentBar = styled.div`
  width: 8px;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.primary["00"]};
  border-radius: 4px;
  flex-shrink: 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  ${({ theme }) => theme.typography.head.H0};
  margin: 0;
`;
