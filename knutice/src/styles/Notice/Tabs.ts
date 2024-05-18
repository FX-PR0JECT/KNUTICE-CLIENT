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

const Item = styled.a<{ isSelected: boolean }>`
  padding: 0.9rem 1.5rem;
  border-radius: 1.875rem;

  color: ${(props) => (props.isSelected ? '#000' : '#FFF')};
  font-size: 1.3rem;
  font-weight: 500;
  text-decoration: none;

  background: ${(props) => (props.isSelected ? '#FFF' : '#333333')};

  &:hover {
    color: #000;
    background: #fff;
    transition: 0.5s;
  }
`;

export { TabList, ItemWrapper, Item };
