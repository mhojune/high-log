import * as S from "@/components/common/Footer.styles";
import Vector from "@/assets/icons/Vector.svg?react";
import Blog from "@/assets/icons/Blog.svg?react";
import Youtube from "@/assets/icons/Youtube.svg?react";
import Insta from "@/assets/icons/Insta.svg?react";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterContent>
        <S.LeftSection>
          <S.LogoWrapper>
            <Vector />
          </S.LogoWrapper>
          <S.TextParagraph>(주) 고트헤이븐</S.TextParagraph>
          <S.TextParagraph>
            대표자: 차형호 | 사업자 등록번호: 177-88-02306
          </S.TextParagraph>
          <S.TextParagraph>인천광역시 청능대로 581, 503-562호</S.TextParagraph>
          <S.TextParagraph>
            <S.Link to="/privacy">개인정보 처리방침</S.Link>
            {" | "}
            <S.Link to="/term">이용약관</S.Link>
          </S.TextParagraph>
        </S.LeftSection>
        <S.RightSection>
          <S.SocialIcons>
            <S.IconButton>
              <Blog />
            </S.IconButton>
            <S.IconButton>
              <Youtube />
            </S.IconButton>
            <S.IconButton>
              <Insta />
            </S.IconButton>
          </S.SocialIcons>
          <S.Copyright>Copyright © 2026 GOATHEAVEN All Rights Reserved.</S.Copyright>
        </S.RightSection>
      </S.FooterContent>
    </S.FooterContainer>
  );
}
