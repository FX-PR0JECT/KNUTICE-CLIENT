import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;

  width: 100%;
  height: 5rem;

  border-bottom: 1px solid #2f2f2f;
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

  gap: 0.3rem;
  cursor: pointer;
`;

const Logo = styled.span`
  font-size: 1.5rem;
  font-weight: 500;

  color: #fff;
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

export { NavContainer, Header, LogoWrapper, Logo, Label, ItemWrapper, Item };
