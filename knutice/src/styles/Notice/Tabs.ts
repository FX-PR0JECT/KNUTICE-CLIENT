import styled, { css } from 'styled-components';

const TabList = styled.ul`
  display: flex;
  padding-left: 0.8rem;
  gap: 0.7rem;
`;

/* Tab Component Styles */
const ItemWrapper = styled.li`
  list-style: none;
`;

const Item = styled.a<{ $isSelected: boolean; $device: TDevice }>`
  border-radius: 1.875rem;
  padding: 0.9rem 1.5rem;

  font-size: 1.3rem;
  font-weight: 400;
  text-decoration: none;

  color: ${({ $isSelected, theme }) => ($isSelected ? theme.selectedTabColor : theme.color)};
  background: ${({ $isSelected, theme }) => ($isSelected ? theme.selectedTabBg : theme.tabBgColor)};

  &:hover {
    color: ${({ theme }) => theme.selectedTabColor};
    background: ${({ theme }) => theme.selectedTabBg};

    transition: 0.5s;
  }

  ${({ $device }) => {
    switch ($device) {
      case 'mobile':
        return css`
          padding: 0.7rem 1.1rem;
          font-size: 1.1rem;
        `;
    }
  }}
`;

export { TabList, ItemWrapper, Item };
