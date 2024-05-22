import styled from 'styled-components';

const TabList = styled.ul`
  display: flex;
  padding-left: 0.8rem;
  gap: 0.7rem;
`;

/* Tab Component Styles */
const ItemWrapper = styled.li`
  list-style: none;
`;

const Item = styled.a<{ $isSelected: boolean }>`
  padding: 0.9rem 1.5rem;
  border-radius: 1.875rem;

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
`;

export { TabList, ItemWrapper, Item };
