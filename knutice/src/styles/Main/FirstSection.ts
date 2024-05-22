import styled, { keyframes } from 'styled-components';
import { COLORS } from '@/constants/color';

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
  color: ${({ theme }) => theme.color};
`;

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Emphasis = styled.span`
  color: transparent;
  background: linear-gradient(
    to right,
    ${COLORS['gradient-first']},
    ${COLORS['gradient-second']}
  );

  background-size: 200% 200%;
  -webkit-background-clip: text;

  animation: ${gradientAnimation} 3s ease infinite;
`;

const scrlDwnIndc = keyframes`
  0%   { transform: translateY(0); opacity: 0 }
  30%  { transform: translateY(-10%); opacity: 0.3 }
  50%  { transform: translateY(-20%); opacity: 0.5}
  70%  { transform: translateY(-10%); opacity: 0.3 }
  100% { transform: translateY(0); opacity: 0 }
`;

const ScrollWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;

  left: 50%;
  bottom: 0.5rem;

  gap: 1rem;

  transform: translateX(-50%) translateY(0);
  z-index: 2;

  will-change: transform;
  animation: ${scrlDwnIndc} 2.5s infinite linear;
`;

export {
  FirstSec,
  TitleWrapper,
  Title,
  gradientAnimation,
  Emphasis,
  ScrollWrapper,
};
