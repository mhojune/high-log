import * as S from '@/pages/Home/Home.styles';
import User from '@/assets/icons/circle_user.svg?react';

export default function Home() {
  return (
    <S.Container>
      <h1>Home</h1>
      <User width={40} height={40} fill="red" />
    </S.Container>
  );
};
