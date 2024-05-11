import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;

  width: 100%;
  height: 3.5rem;

  background-color: #000;
  color: #fff;

  z-index: 3;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 72rem;
  height: 100%;

  margin: auto;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.h2`
  color: #fff;
`;

const LogoEmphasis = styled.span`
  color: transparent;
  background: linear-gradient(to right, #d92142, #ecc3c3);
  -webkit-background-clip: text;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1.2rem;
`;

const Item = styled.div`
  cursor: pointer;
`;

const Label = styled.span`
  font-size: 1.25rem;
  font-weight: 500;

  color: #fff;
`;

export { NavContainer, Header, LogoWrapper, Logo, LogoEmphasis, Label, ItemWrapper, Item };
