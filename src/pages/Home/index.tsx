import * as S from '@/pages/home/Home.styles';
import HookingSection from '@/features/home/HookingSection';
import DifferentSection from '@/features/home/DifferentSection';
import InfoSection from '@/features/home/InfoSection';
import AutoScrollCardSection from '@/features/home/AutoScrollCardSection';

export default function Home() {
  return (
    <S.Container>
      <HookingSection />
      <DifferentSection />
      <InfoSection />
      <AutoScrollCardSection />
    </S.Container>
  );
};
