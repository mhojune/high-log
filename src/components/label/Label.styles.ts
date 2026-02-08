import styled from "styled-components";

type StyleType = "default" | "intermediate" | "advanced";

export const LabelContainer = styled.span<{ styleType: StyleType }>`
  width: 57px;
  height: 29px;
  padding: 4px 16px;
  box-sizing: border-box;
  border: 1px solid ${({ styleType, theme }) => {
    switch (styleType) {
      case "default":
        return theme.colors.labelColor["01"];
      case "intermediate":
        return theme.colors.labelColor["04"];
      case "advanced":
        return theme.colors.labelColor["07"];
    }
  }};
  border-radius: 999px;
  background-color: ${({ styleType, theme }) => {
    switch (styleType) {
      case "default":
        return theme.colors.labelColor["02"];
      case "intermediate":
        return theme.colors.labelColor["05"];
      case "advanced":
        return theme.colors.labelColor["08"];
    }
  }};
  color: ${({ styleType, theme }) => {
    switch (styleType) {
      case "default":
        return theme.colors.labelColor["00"];
      case "intermediate":
        return theme.colors.labelColor["03"];
      case "advanced":
        return theme.colors.labelColor["06"];
    }
  }};
  ${({ theme }) => theme.typography.body.XS2}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
`;
