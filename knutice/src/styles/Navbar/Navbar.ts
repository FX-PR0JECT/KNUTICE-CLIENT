import styled, { css } from 'styled-components';

const NavContainer = styled.div<{ $device: TDevice }>`
  position: fixed;

  width: 100%;
  height: 5rem;

  border-bottom: 0.063rem solid ${({ theme }) => theme.borderBottom};
  background-color: ${({ theme }) => theme.backgroundColor};

  z-index: 3;
  transition: 0.3s linear;

  ${({ $device }) => {
    if ($device === 'mobile') {
      return css`
        height: 4.25rem;
      `;
    }
  }}
`;

const Header = styled.div<{ $device: TDevice }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  margin: auto;

  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          width: 67rem;
        `;
      case 'tablet':
        return css`
          width: 43rem;
        `;
      case 'mobile':
        return css`
          width: 20rem;
        `;
    }
  }}
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Logo = styled.a<{ $device: TDevice }>`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 500;

  color: ${({ theme }) => theme.color};

  ${({ $device }) => {
    if ($device === 'mobile') {
      return css`
        font-size: 1.4rem;
      `;
    }
  }}
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 1.2rem;
`;

const Item = styled.div`
  cursor: pointer;
`;

const Label = styled.span<{ $device: TDevice }>`
  font-size: 1.25rem;
  font-weight: 500;

  color: ${({ theme }) => theme.color};
  ${({ $device }) => {
    if ($device === 'mobile') {
      return css`
        font-size: 1.1rem;
      `;
    }
  }}
`;

export { NavContainer, Header, LogoWrapper, Logo, Label, ItemWrapper, Item };
