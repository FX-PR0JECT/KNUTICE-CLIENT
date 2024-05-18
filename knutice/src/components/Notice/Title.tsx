'use client';

import { TitleContainer, TitleText, Description } from '@/styles/Notice/Title';

interface ITitle {
  title: string;
  description: string;
}

const Title = ({ title, description }: ITitle) => {
  return (
    <TitleContainer>
      <TitleText>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Alarm%20Clock.png"
          alt="Alarm Clock"
          width="50"
          height="50"
        />
        {title}
      </TitleText>
      <Description>{description}</Description>
    </TitleContainer>
  );
};

export default Title;
