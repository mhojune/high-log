import styled from "styled-components";

export const AcodianIconContainer = styled.div<{type:string}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  cursor: ${({ type }) => (type === "disabled" ? "not-allowed" : "pointer")};

  transition: transform 0.4s ease-in-out;
  transform: ${({ type }) => (type === "default" ? 'rotate(0deg)' : 'rotate(180deg)')};
`;