import styled, { keyframes } from 'styled-components';

const FirstSec = styled.div`
  display: flex;
  justify-content: center;

  position: relative;

  width: 100%;
  height: 100vh;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #e3e3e3;
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Emphasis = styled.span`
  color: transparent;

  background: linear-gradient(to right, #ff0048, #fcb2c5);
  background-size: 200% 200%;
  -webkit-background-clip: text;

  animation: ${gradientAnimation} 3s ease infinite;
`;

export { FirstSec, TitleWrapper, Title, gradientAnimation, Emphasis };
