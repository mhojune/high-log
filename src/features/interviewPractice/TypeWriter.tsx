import { useEffect, useState, useRef } from "react";

interface TypewriterProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export default function TypeWriter({
  text,
  speed = 30,
  onComplete,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);
  const [prevText, setPrevText] = useState(text);

  // 렌더링 중 안전하게 비교하기 위해 현재 출력된 길이를 상태로 관리
  const [currentLength, setCurrentLength] = useState(0);

  const currentIndexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (text !== prevText) {
    setPrevText(text);
    // ref 대신 state(currentLength)를 사용하여 렌더링 중 비교
    if (isFinished && currentLength < text.length) {
      setIsFinished(false);
    }
  }

  useEffect(() => {
    const tick = () => {
      const fullText = text;
      const remaining = fullText.length - currentIndexRef.current;

      if (remaining > 0) {
        // 자연스러운 연출을 위해 한 번에 1~3글자씩 랜덤하게 출력 (청크 단위)
        const chunk = remaining > 5 ? Math.floor(Math.random() * 3) + 1 : 1;
        const nextSlice = fullText.slice(
          currentIndexRef.current,
          currentIndexRef.current + chunk,
        );

        setDisplayedText((prev) => prev + nextSlice);
        currentIndexRef.current += nextSlice.length;

        // 렌더링 단계에서 안전하게 쓰기 위해 상태 업데이트
        setCurrentLength(currentIndexRef.current);

        // 약간의 랜덤 딜레이를 주어 기계적인 느낌 제거
        const dynamicSpeed = speed + Math.random() * 20;
        timerRef.current = setTimeout(tick, dynamicSpeed);
      } else {
        setIsFinished(true);
        if (onComplete) onComplete();
      }
    };

    timerRef.current = setTimeout(tick, speed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, speed, onComplete, isFinished]);

  return (
    <>
      {displayedText}
      {!isFinished && (
        <span
          style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            backgroundColor: "currentColor",
            marginLeft: "2px",
            verticalAlign: "middle",
            animation: "blink 1s step-end infinite",
          }}
        >
          |
        </span>
      )}
      <style>{`
        @keyframes blink { from, to { opacity: 1; } 50% { opacity: 0; } }
      `}</style>
    </>
  );
}
