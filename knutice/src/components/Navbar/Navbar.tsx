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

const Navbar = () => {
  return (
    <NavContainer>
      <Header>
        <LogoWrapper>
          <img
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Bell.png"
            alt="Bell"
            width="25"
            height="25"
          />
          <Logo>KNUTICE</Logo>
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
