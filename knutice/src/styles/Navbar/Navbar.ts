import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;

  width: 100%;
  height: 5rem;

  border-bottom: 1px solid ${({ theme }) => theme.borderBottom};
  background-color: ${({ theme }) => theme.backgroundColor};

  z-index: 3;
  transition: 0.3s linear;
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

const Logo = styled.a`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;

  color: ${({ theme }) => theme.color};
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

  color: ${({ theme }) => theme.color};
`;

export { NavContainer, Header, LogoWrapper, Logo, Label, ItemWrapper, Item };
