import { HContent } from '@/components';
import { MAIN_CONTENT } from '@/constants/content';
import {
  SecondSec,
  ContentWrapper,
  ContentDesc,
  Title,
  Description,
  ContentImage,
  Image,
} from '@/styles/Main/SecondSection';

interface ContentProps {
  device: TDevice;
  title: string;
  description: string;
  align?: string;
  imageFirst?: boolean;
}

const Content = ({
  device,
  title,
  description,
  align = 'left',
  imageFirst = false,
}: ContentProps) => {
  const content = (
    <ContentDesc $device={device}>
      <Title $align={align} $device={device}>
        {title}
      </Title>
      <Description $align={align} $device={device}>
        {description}
      </Description>
    </ContentDesc>
  );

  const image = (
    <ContentImage $device={device}>
      <Image></Image>
    </ContentImage>
  );

  return (
    <ContentWrapper $device={device}>
      {imageFirst ? image : content}
      {imageFirst ? content : image}
    </ContentWrapper>
  );
};

const SecondSection = ({ device }: { device: TDevice }) => {
  return (
    <SecondSec>
      <HContent device={device}>
        <Content
          device={device}
          title={MAIN_CONTENT.firstTitle}
          description={MAIN_CONTENT.description}
        />
        <Content
          device={device}
          title={MAIN_CONTENT.secondTitle}
          description={MAIN_CONTENT.description}
          align="right"
          imageFirst={device === 'desktop' ? true : false}
        />
      </HContent>
    </SecondSec>
  );
};

export default SecondSection;
