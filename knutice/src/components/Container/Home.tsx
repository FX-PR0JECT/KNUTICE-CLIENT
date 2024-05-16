import { Container } from '@/styles/Home';

interface IHomeProps {
  children: React.ReactNode;
}

const Home = ({ children }: IHomeProps) => {
  return <Container>{children}</Container>;
};

export default Home;
