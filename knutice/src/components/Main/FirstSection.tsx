import { COLORS } from '@/constants/color';
import { FirstSec, TitleWrapper, Title, Emphasis, ScrollWrapper } from '@/styles/Main/FirstSection';

const FirstSection = () => {
  return (
    <FirstSec>
      <TitleWrapper>
        <Title>
          언제, 어디서든
          <br />
          우리 학교 <Emphasis>[ 소식 ]</Emphasis>을
          <br />
          쉽게 확인할 수 있게<Emphasis>.</Emphasis>
        </Title>
      </TitleWrapper>
      <ScrollWrapper>
        <svg width={50} height={50}>
          <path
            d="M3 3L21.5 18L40 3"
            stroke={COLORS.white}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
        </svg>
      </ScrollWrapper>
    </FirstSec>
  );
};

export default FirstSection;
