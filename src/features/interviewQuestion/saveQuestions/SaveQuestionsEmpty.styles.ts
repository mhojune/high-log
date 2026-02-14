import styled from "styled-components";

export const EmptyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 181px 0;
  margin-top: 48px;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  margin-bottom: 30px;
`;

export const EmptyTitle = styled.p`
  ${({ theme }) => theme.typography.body.L2};
  color: ${({ theme }) => theme.colors.grayScale["00"]};
  margin-bottom: 4px;
`;

export const EmptyDescription = styled.p`
  ${({ theme }) => theme.typography.body.L0};
  color: ${({ theme }) => theme.colors.grayScale["02"]};
  margin: 0;
  text-align: center;
  line-height: 1.6;
`;

export const ButtonWrapper = styled.div`
  margin-top: 30px;
`;
