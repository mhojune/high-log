import styled from "styled-components";

export const IconContainer = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  cursor: pointer;

  svg {
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s ease-in-out, transform 0.2s ease;
  }
`;