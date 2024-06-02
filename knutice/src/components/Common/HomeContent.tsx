import { HomeContent } from '@/styles/Main/SecondSection';

interface IHContent {
  device: TDevice;
  children: React.ReactNode;
}

const HContent = ({ device, children }: IHContent) => {
  return <HomeContent $device={device}>{children}</HomeContent>;
};

export default HContent;
