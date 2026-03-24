import { DefaultButton } from "@/components/button/Button";
import { AUTH_DESCRIPTION, AUTH_FEATURE_BLOCKS } from "@/constants/auth";
import * as S from "@/features/auth/AuthDescription.styles";
import FileQuestionIcon from "@/assets/icons/file-question-01.svg?react";
import MessageChatIcon from "@/assets/icons/message-chat-01.svg?react";
import Book04Icon from "@/assets/icons/book-04.svg?react";

const AUTH_FEATURE_ICONS = [
  FileQuestionIcon,
  MessageChatIcon,
  Book04Icon,
] as const;

export default function AuthDescription() {
  return (
    <S.Wrapper>
      <S.TextBlock>
        {AUTH_DESCRIPTION.headings.map((heading) => (
          <h2 key={heading}>{heading}</h2>
        ))}
      </S.TextBlock>
      <S.FeatureBlocksWrapper>
        {AUTH_FEATURE_BLOCKS.map((block, index) => {
          const Icon = AUTH_FEATURE_ICONS[index];
          return (
            <S.FeatureBlock key={block.title}>
              <S.FeatureBlockContent>
                <S.FeatureBlockIcon>
                  <Icon aria-hidden />
                </S.FeatureBlockIcon>
                <S.FeatureBlockTitle>{block.title}</S.FeatureBlockTitle>
              </S.FeatureBlockContent>
            </S.FeatureBlock>
          );
        })}
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
