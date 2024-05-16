import { HomeContent } from '@/styles/Main/SecondSection';

interface IHContent {
  children: React.ReactNode;
}

const HContent = ({ children }: IHContent) => {
  return <HomeContent>{children}</HomeContent>;
};

export default HContent;
