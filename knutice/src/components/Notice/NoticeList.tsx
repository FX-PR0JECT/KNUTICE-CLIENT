'use client';

import { DefaultImage } from '@/components';
import {
  CardWrapper,
  LinkItem,
  CardItem,
  Notice,
  Title,
  Department,
  Classification,
  RegistrationDate,
  NoticeCardList,
} from '@/styles/Notice/NoticeList';

const NoticeList = () => {
  return (
    <NoticeCardList>
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
    </NoticeCardList>
  );
};

const NoticeCard = () => {
  return (
    <CardWrapper>
      <LinkItem href="/notice">
        <CardItem>
          <DefaultImage />
          <Notice>
            <Title>공지 제목 제대로 생략되는지 확인하기 위한 긴 텍스트글</Title>
            <Department>학사과</Department>
            <Classification>#일반공지</Classification>
            <RegistrationDate>2024년 5월 14일</RegistrationDate>
          </Notice>
        </CardItem>
      </LinkItem>
    </CardWrapper>
  );
};

export default NoticeList;
