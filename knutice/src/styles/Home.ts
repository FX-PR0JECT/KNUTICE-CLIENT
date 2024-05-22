import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.backgroundColor};

  transition: 0.3s linear;
`;
