import styled from "styled-components";

/** 전체 카드 블러 번짐 클립 */
export const Outer = styled.div`
  width: 100%;
  position: relative;
  border-radius: 12px;
  overflow: hidden;
`;

/** 질문·목적·포인트·모범 답변·기준 포함 전체 블러(축소 스케일 없음 → 일반 카드와 동일 박스) */
export const BlurredInner = styled.div`
  filter: blur(4px);
  user-select: none;
  pointer-events: none;
`;
