import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 44px 14px 13px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.grayScale["11"]};
  border: 1px solid ${({ theme }) => theme.colors.secondary["07"]};
  border-radius: 12px;
  ${({ theme }) => theme.typography.body.S0};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.grayScale["00"]};

  &::placeholder {
    ${({ theme }) => theme.typography.body.S0};
    line-height: 20px;
    color: ${({ theme }) => theme.colors.grayScale["05"]};
  }

  &:disabled {
    cursor: default;
    opacity: 1;
  }
`;

export const EyeButton = styled.button.attrs({ type: "button" })`
  position: absolute;
  top: 17.5px;
  right: 19.4px;
  bottom: 16.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  cursor: pointer;
`;
