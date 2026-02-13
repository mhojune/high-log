import { DefaultButton } from "@/components/button/Button";
import { AUTH_DESCRIPTION, AUTH_FEATURE_BLOCKS } from "@/constants/auth";
import * as S from "@/features/auth/AuthDescription.styles";

export default function AuthDescription() {
  return (
    <S.Wrapper>
      <S.TextBlock>
        {AUTH_DESCRIPTION.headings.map((heading) => (
          <h2 key={heading}>{heading}</h2>
        ))}
      </S.TextBlock>
      <S.FeatureBlocksWrapper>
        {AUTH_FEATURE_BLOCKS.map((block) => (
          <S.FeatureBlock key={block.title}>
            <S.FeatureBlockContent>
              <S.FeatureBlockTitle>{block.title}</S.FeatureBlockTitle>
              <S.FeatureBlockDescription>
                {block.description}
              </S.FeatureBlockDescription>
            </S.FeatureBlockContent>
          </S.FeatureBlock>
        ))}
      </S.FeatureBlocksWrapper>
      <S.ButtonWrapper>
        <DefaultButton
          width={174}
          type="secondary"
          text={AUTH_DESCRIPTION.sampleButtonText}
        />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
