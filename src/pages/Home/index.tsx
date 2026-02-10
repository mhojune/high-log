import * as S from '@/pages/Home/Home.styles';
import HookingSection from '@/features/home/HookingSection';
import DifferentSection from '@/features/home/DifferentSection';
import InfoSection from '@/features/home/InfoSection';

export default function Home() {
  return (
    <S.Container>
      <HookingSection />
      <DifferentSection />
      <InfoSection />
    </S.Container>
  );
};
