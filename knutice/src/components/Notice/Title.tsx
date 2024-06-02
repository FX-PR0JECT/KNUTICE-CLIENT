'use client';

import { TitleContainer, TitleText, Description } from '@/styles/Notice/Title';

interface ITitle {
  device: TDevice;
  title: string;
  description: string;
}

const Title = ({ title, description, device }: ITitle) => {
  return (
    <TitleContainer $device={device}>
      <TitleText $device={device}>
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Travel%20and%20places/Alarm%20Clock.png"
          alt="Alarm Clock"
          width="50"
          height="50"
        />
        {title}
      </TitleText>
      <Description $device={device}>{description}</Description>
    </TitleContainer>
  );
};

export default Title;
