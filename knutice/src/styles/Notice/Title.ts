import styled from 'styled-components';

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2.4rem 0 3rem 0.8rem;
  gap: 0.5rem;
`;

const TitleText = styled.h1`
  display: flex;
  align-items: center;

  color: #fff;
  font-size: 2.8rem;

  gap: 0.5rem;
`;

const Description = styled.span`
  color: #fff;
  font-size: 2rem;
  font-weight: 500;
  text-indent: 0.2rem;
`;

export { TitleContainer, TitleText, Description };
