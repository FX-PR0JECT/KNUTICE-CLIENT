import Image from 'next/image';
import {
  NavContainer,
  Header,
  LogoWrapper,
  Logo,
  LogoEmphasis,
  ItemWrapper,
  Item,
  Label,
} from '@/styles/Navbar/Navbar';

const Navbar = () => {
  return (
    <NavContainer>
      <Header>
        <LogoWrapper>
          <Logo>
            <LogoEmphasis>KNUT</LogoEmphasis>ICE
          </Logo>
        </LogoWrapper>
        <ItemWrapper>
          <Item>
            <Label>소개</Label>
          </Item>
          <Item>
            <Label>공지</Label>
          </Item>
          <Item>
            <Image src="/assets/sun.png" alt="" width={22} height={22} />
          </Item>
        </ItemWrapper>
      </Header>
    </NavContainer>
  );
};

export default Navbar;
