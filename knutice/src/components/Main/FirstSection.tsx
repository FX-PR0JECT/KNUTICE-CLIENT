import { FirstSec, TitleWrapper, Title, Emphasis } from '@/styles/Main/FirstSection';

const FirstSection = () => {
  return (
    <FirstSec>
      <TitleWrapper>
        <Title>언제, 어디서든</Title>
        <Title>
          우리 학교 <Emphasis>[ 소식 ]</Emphasis>을
        </Title>
        <Title>
          쉽게 확인할 수 있게<Emphasis>.</Emphasis>
        </Title>
      </TitleWrapper>
    </FirstSec>
  );
};

export default FirstSection;
