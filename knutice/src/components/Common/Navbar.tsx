import Image from 'next/image';
import {
  NavContainer,
  Header,
  LogoWrapper,
  Logo,
  ItemWrapper,
  Item,
  Label,
} from '@/styles/Navbar/Navbar';
import Link from 'next/link';

interface INavbar {
  device: TDevice;
  mode: boolean;
  themeHandler: () => void;
}

const Navbar = ({ device, mode, themeHandler }: INavbar) => {
  return (
    <NavContainer $device={device}>
      <Header $device={device}>
        <LogoWrapper>
          <Logo $device={device} href="/">
            KNUTICE
          </Logo>
        </LogoWrapper>
        <ItemWrapper>
          <Link href="/">
            <Item>
              <Label $device={device}>소개</Label>
            </Item>
          </Link>
          <Link href="/notice">
            <Item>
              <Label $device={device}>공지</Label>
            </Item>
          </Link>
          <Item>
            {mode ? (
              <Image
                src="/assets/sun.png"
                alt="sun icon"
                width={22}
                height={22}
                onClick={themeHandler}
              />
            ) : (
              <Image
                src="/assets/moon.png"
                alt="moon icon"
                width={22}
                height={22}
                onClick={themeHandler}
              />
            )}
          </Item>
        </ItemWrapper>
      </Header>
    </NavContainer>
  );
};

export default Navbar;
