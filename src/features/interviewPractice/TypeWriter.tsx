import { useEffect, useState } from "react";

interface TypewriterProps {
  text: string;
  onComplete?: () => void;
  speed?: number;
}

export default function TypeWriter({ text, speed = 30 }: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // 텍스트가 없거나 빈 문자열이면 실행 중지
    if (!text) {
      setDisplayedText("");
      return;
    }

    let i = 0;
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + (text[i] || ""));
      i++;

      if (i >= text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  // text가 없을 때는 아무것도 렌더링하지 않거나 기본 메시지 출력
  if (!text) return null;

  return <>{displayedText}</>;
}
