import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h4`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  ${({ theme }) => theme.typography.head.H4};
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary["00"]};
`;

export const SelectRow = styled.div`
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 24px;
`;

