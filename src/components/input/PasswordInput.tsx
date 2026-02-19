import { useState } from "react";
import EyeIcon from "@/assets/icons/eye.svg?react";
import EyeClosedIcon from "@/assets/icons/eye_closed.svg?react";
import * as S from "./PasswordInput.styles";

interface PasswordInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  id?: string;
}

export default function PasswordInput({
  id,
  placeholder,
  value,
  onChange,
  required,
  ...rest
}: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <S.Wrapper>
      <S.Input
        id={id}
        type={isVisible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...rest}
      />
      <S.EyeButton
        type="button"
        onClick={() => setIsVisible((prev) => !prev)}
        aria-label={isVisible ? "비밀번호 숨기기" : "비밀번호 보기"}
      >
        {isVisible ? (
          <EyeClosedIcon width={22} height={16} stroke="#8A8D92" />
        ) : (
          <EyeIcon width={22} height={17} stroke="#8A8D92" />
        )}
      </S.EyeButton>
    </S.Wrapper>
  );
}
