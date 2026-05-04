import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Segments = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 0;
`;

export const Segment = styled.div<{ $active: boolean; $activeEnd: boolean }>`
  height: 4px;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary["00"] : theme.colors.secondary["08"]};

  ${({ $activeEnd }) =>
    $activeEnd &&
    `
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  `}
`;
