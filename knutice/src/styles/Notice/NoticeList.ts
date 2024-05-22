import styled from 'styled-components';
import { COLORS } from '@/constants/color';

const NoticeCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  padding: 0;
`;

/* Notice Card Component Styles */
const CardWrapper = styled.li`
  width: 390px;
  padding: 0 0.8rem;

  list-style: none;
  transition: transform 0.25s ease-in;
  transform: translateY(0);

  &:hover {
    transform: translateY(-0.625rem);
  }
`;

const LinkItem = styled.a`
  text-decoration: none;
`;

const CardItem = styled.div`
  position: relative;
  margin-top: 1.6rem;

  border-radius: 14px;
  box-shadow:
    0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.03),
    0 1rem 1rem 0 rgba(0, 0, 0, 0.03);
  background: ${({ theme }) => theme.cardItemBg};
`;

const Notice = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 1.2rem;
  gap: 0.4rem;
`;

const Title = styled.h2`
  display: block;

  font-weight: 600;
  letter-spacing: 0.03rem;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: ${({ theme }) => theme.color};
`;

const Department = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.color};
`;

const Classification = styled.span`
  letter-spacing: 0.03rem;
  color: ${COLORS.gray2};
`;

const RegistrationDate = styled.span`
  margin-top: 2rem;
  color: ${COLORS.gray1};
`;

export {
  CardWrapper,
  LinkItem,
  CardItem,
  Notice,
  Title,
  Department,
  Classification,
  RegistrationDate,
  NoticeCardList,
};
