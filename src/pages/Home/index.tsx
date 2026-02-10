import * as S from '@/pages/Home/Home.styles';
import HookingSection from '@/features/home/HookingSection';
import DifferentSection from '@/features/home/DifferentSection';

export default function Home() {
  return (
    <S.Container>
      <HookingSection />
      <DifferentSection />
    </S.Container>
  );
};
