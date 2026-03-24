import styled from "styled-components";

export const PracticeStep3Container = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
`;

export const Step3Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 988px;
  align-self: stretch;
  gap: 48px;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border-radius: 12px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.head.H4};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const FeedBackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const FeedBackBox = styled.div`
  display: flex;
  width: 1041px;
  height: 182px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  background-color: ${({ theme }) => theme.colors.secondary["09"]};
  padding: 35px 0 0 34px;
  gap: 36px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
`;

export const Question = styled.p`
  ${({ theme }) => theme.typography.head.H4};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
`;

export const Description = styled.p`
  ${({ theme }) => theme.typography.body.XL};
  color: ${({ theme }) => theme.colors.grayScale["05"]};
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CustomCheckBoxContainer = styled.div<{ $isChecked: boolean }>`
  width: 52px;
  height: 52px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  background: ${({ theme }) => theme.colors.grayScale["11"]};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
