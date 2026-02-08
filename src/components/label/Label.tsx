import * as S from "./Label.styles";

type LabelType = "basic" | "intermediate" | "advanced" | "good" | "normal" | "improve";

interface LabelProps {
  type: LabelType;
}

const getText = (type: LabelType): string => {
  const textMap: Record<LabelType, string> = {
    basic: "기본",
    intermediate: "심화",
    advanced: "압박",
    good: "좋음",
    normal: "보통",
    improve: "개선",
  };
  
  return textMap[type];
};

export default function Label({ type }: LabelProps) {
  const getStyleType = (type: LabelType): "default" | "intermediate" | "advanced" => {
    if (type === "basic" || type === "good") return "default";
    if (type === "intermediate" || type === "normal") return "intermediate";
    return "advanced"; // "advanced" || "improve"
  };

  return <S.LabelContainer styleType={getStyleType(type)}>{getText(type)}</S.LabelContainer>;
}
