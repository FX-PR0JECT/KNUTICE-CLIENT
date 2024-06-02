import styled, { css } from 'styled-components';
import { COLORS } from '@/constants/color';

const NoticeCardList = styled.ul<{ $device: TDevice }>`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 1.2rem;

  padding: 0;

  ${({ $device }) => {
    if ($device === 'desktop') {
      return css`
        grid-template-columns: repeat(3, 1fr);
      `;
    }
  }}
`;

/* Notice Card Component Styles */
const CardWrapper = styled.li<{ $device: TDevice }>`
  padding: 0 0.8rem;

  list-style: none;
  transition: transform 0.25s ease-in;
  transform: translateY(0);

  &:hover {
    transform: translateY(-0.625rem);
  }

  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          width: 22.875rem;
        `;
      case 'tablet':
        return css`
          width: 39rem;
        `;
      case 'mobile':
        return css`
          width: 20rem;
        `;
    }
  }}
`;

const LinkItem = styled.a`
  text-decoration: none;
`;

const CardItem = styled.div`
  position: relative;
  margin-top: 0.5rem;

  border-radius: 0.875rem;
  box-shadow:
    0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.03),
    0 1rem 1rem 0 rgba(0, 0, 0, 0.03);
  background: ${({ theme }) => theme.cardItemBg};
`;

const Notice = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem 1.2rem;
  gap: 0.25rem;

  font-size: 0.975rem;
`;

const Title = styled.h2<{ $device: TDevice }>`
  display: block;

  font-weight: 600;
  letter-spacing: 0.03rem;

  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  color: ${({ theme }) => theme.color};

  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          font-size: 1.575rem;
        `;
      case 'tablet':
        return css`
          font-size: 1.575rem;
        `;
      case 'mobile':
        return css`
          font-size: 1.475rem;
        `;
    }
  }}
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
  margin-top: 1.3rem;
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
