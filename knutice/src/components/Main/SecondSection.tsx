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
  title: string;
  description: string;
  align?: string;
  imageFirst?: boolean;
}

const Content = ({ title, description, align = 'left', imageFirst = false }: ContentProps) => {
  const content = (
    <ContentDesc>
      <Title $align={align}>{title}</Title>
      <Description>{description}</Description>
    </ContentDesc>
  );

  const image = (
    <ContentImage>
      <Image></Image>
    </ContentImage>
  );

  return (
    <ContentWrapper>
      {imageFirst ? image : content}
      {imageFirst ? content : image}
    </ContentWrapper>
  );
};

const SecondSection = () => {
  return (
    <SecondSec>
      <HContent>
        <Content title={MAIN_CONTENT.firstTitle} description={MAIN_CONTENT.description} />
        <Content
          title={MAIN_CONTENT.secondTitle}
          description={MAIN_CONTENT.description}
          align="right"
          imageFirst={true}
        />
      </HContent>
    </SecondSec>
  );
};

export default SecondSection;
