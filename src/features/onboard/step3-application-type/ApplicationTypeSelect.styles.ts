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

export const RadioGroup = styled.div`
  margin-top: 48px;
  width: max-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
`;

export const ButtonRow = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
`;

export const RadioOption = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  ${({ theme }) => theme.typography.body.L0};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  cursor: pointer;
`;
