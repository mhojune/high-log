import Favorite_Default from "@/assets/icons/favorite_default.svg?react"
import Favorite_Select from "@/assets/icons/favorite_select.svg?react"
import * as S from "@/components/favorite/Favorite.styles"

interface FavoriteProps {
    type : string;
    onClick : () => void;
}

export default function Favorite({ type, onClick }: FavoriteProps) {
  return (
    <S.IconContainer onClick={onClick}>
      <Favorite_Default 
        style={{ opacity: type === "default" ? 1 : 0 }} 
        width={48} height={48} 
      />
      <Favorite_Select 
        style={{ opacity: type === "select" ? 1 : 0 }} 
        width={48} height={48} 
      />
    </S.IconContainer>
  );
}