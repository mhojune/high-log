import AcodianIcon from "@/assets/icons/acodian.svg?react"
import * as S from "@/components/acodian/Acodian.styles"

interface AcodianProps {
    type : string;
    onClick : () => void;
}

export default function Acodian({ type, onClick }: AcodianProps) {
  return (
    <S.AcodianIconContainer onClick={onClick} type={type}>
      <AcodianIcon width={48} height={48}/>
    </S.AcodianIconContainer>
  );
}