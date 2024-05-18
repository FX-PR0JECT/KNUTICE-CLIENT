import styled from 'styled-components';

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

  background-color: #222224;
  box-shadow: 4px 12px 30px 6px rgba(0, 0, 0, 0.09);
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

  color: #fff;
`;

const Department = styled.span`
  color: #fff;
  font-weight: 400;
`;

const Classification = styled.span`
  letter-spacing: 0.03rem;
  color: #999;
`;

const RegistrationDate = styled.span`
  margin-top: 2rem;
  color: #797979;
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
