import styled from "styled-components";

export const CarouselWrapper = styled.div`
  width: 100%;
`;

export const CarouselImageArea = styled.div<{ $isDragging?: boolean }>`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: ${({ $isDragging }) => ($isDragging ? "grabbing" : "grab")};
  user-select: none;
`;

export const CarouselTrack = styled.div<{
  $currentIndex: number;
  $dragOffset: number;
}>`
  display: flex;
  transform: ${({ $currentIndex, $dragOffset }) =>
    `translateX(calc(-${$currentIndex * 100}% + ${$dragOffset}px))`};
  transition: ${({ $dragOffset }) =>
    $dragOffset !== 0 ? "none" : "transform 0.3s ease-in-out"};
`;

export const CarouselSlide = styled.div`
  flex: 0 0 100%;
  width: 100%;

  img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }
`;

export const CarouselIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;
`;

export const CarouselIndicator = styled.button<{ $active?: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  padding: 0;
  cursor: pointer;
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.secondary["05"] : theme.colors.secondary["07"]};
  transition: background-color 0.2s;
`;
