import { useState, useRef, useCallback, useEffect } from "react";
import * as S from "@/features/interviewQuestion/createQuestionCarousel/CreateQuestionCarousel.styles";

import createQuestion1 from "@/assets/images/create_question_1.png";
import createQuestion2 from "@/assets/images/create_question_2.png";
import createQuestion3 from "@/assets/images/create_question_3.png";

const CAROUSEL_IMAGES = [createQuestion1, createQuestion2, createQuestion3];
const DRAG_THRESHOLD = 50;

export default function CreateQuestionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    startXRef.current = e.clientX;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      const deltaX = dragOffsetRef.current;
      if (deltaX < -DRAG_THRESHOLD && currentIndex < CAROUSEL_IMAGES.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (deltaX > DRAG_THRESHOLD && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
      setDragOffset(0);
      dragOffsetRef.current = 0;
      setIsDragging(false);
    }
  }, [isDragging, currentIndex]);

  const endDrag = useCallback(() => {
    const deltaX = dragOffsetRef.current;
    if (deltaX < -DRAG_THRESHOLD && currentIndex < CAROUSEL_IMAGES.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else if (deltaX > DRAG_THRESHOLD && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    setDragOffset(0);
    dragOffsetRef.current = 0;
    setIsDragging(false);
  }, [currentIndex]);

  useEffect(() => {
    if (!isDragging) return;
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const deltaX = e.clientX - startXRef.current;
        const clampedDelta = Math.max(
          -containerWidth * 0.5,
          Math.min(containerWidth * 0.5, deltaX),
        );
        dragOffsetRef.current = clampedDelta;
        setDragOffset(clampedDelta);
      }
    };
    const handleGlobalMouseUp = () => endDrag();

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
    };
  }, [isDragging, endDrag]);

  return (
    <S.CarouselWrapper>
      <S.CarouselImageArea
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        $isDragging={isDragging}
      >
        <S.CarouselTrack $currentIndex={currentIndex} $dragOffset={dragOffset}>
          {CAROUSEL_IMAGES.map((img, index) => (
            <S.CarouselSlide key={index}>
              <img src={img} alt={`면접 질문 생성 단계 ${index + 1}`} draggable={false} />
            </S.CarouselSlide>
          ))}
        </S.CarouselTrack>
      </S.CarouselImageArea>
      <S.CarouselIndicators>
        {CAROUSEL_IMAGES.map((_, index) => (
          <S.CarouselIndicator
            key={index}
            $active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
            aria-label={`${index + 1}번째 이미지로 이동`}
          />
        ))}
      </S.CarouselIndicators>
    </S.CarouselWrapper>
  );
}
