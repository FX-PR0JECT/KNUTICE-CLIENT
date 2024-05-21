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

const Navbar = () => {
  return (
    <NavContainer>
      <Header>
        <LogoWrapper>
          <Logo href="/">KNUTICE</Logo>
        </LogoWrapper>
        <ItemWrapper>
          <Link href="/">
            <Item>
              <Label>소개</Label>
            </Item>
          </Link>
          <Link href="/notice">
            <Item>
              <Label>공지</Label>
            </Item>
          </Link>
          <Item>
            <Image src="/assets/sun.png" alt="" width={22} height={22} />
          </Item>
        </ItemWrapper>
      </Header>
    </NavContainer>
  );
};

export default Navbar;
