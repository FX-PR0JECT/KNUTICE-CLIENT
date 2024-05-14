import {
  SecondSec,
  HomeContent,
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
      <HomeContent>
        <Content
          title={`학교 공지만\n한곳에 모아\n빠르고, 쉽게`}
          description="학교 홈페이지에 있는 어쩌구 엄청 많은 콘텐츠들 어쩌구 딱 공지만 모아서 정리해 줌
        그래서 우리 어쩌구 어떤 말을 써야 할지 모르겠지만 소개 어쩌구 암튼 그러하다"
        />
        <Content
          title={`학교 공지를\n핸드폰 알림으로\n더 간편하게`}
          description="학교 홈페이지에 있는 어쩌구 엄청 많은 콘텐츠들 어쩌구 딱 공지만 모아서 정리해 줌
        그래서 우리 어쩌구 어떤 말을 써야 할지 모르겠지만 소개 어쩌구 암튼 그러하다"
          align="right"
          imageFirst={true}
        />
      </HomeContent>
    </SecondSec>
  );
};

export default SecondSection;
