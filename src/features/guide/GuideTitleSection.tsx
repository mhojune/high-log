import * as S from "./GuideTitleSection.styles";
import { GUIDE_TITLE, GUIDE_SUBTITLE } from "@/constants/guide";

export default function GuideTitleSection() {
  return (
    <S.GuideTitleSectionContainer>
      <S.TitleGroup>
        <S.Title>{GUIDE_TITLE}</S.Title>
        <S.SubtitleGroup>
          {GUIDE_SUBTITLE.map((line, index) => (
            <S.Subtitle key={index}>{line}</S.Subtitle>
          ))}
        </S.SubtitleGroup>
      </S.TitleGroup>
    </S.GuideTitleSectionContainer>
  );
}
