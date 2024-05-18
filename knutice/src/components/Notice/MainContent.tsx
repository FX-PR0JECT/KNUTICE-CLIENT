'use client';

import { HContent, Title, Tabs, NoticeList } from '@/components';

const MainContent = () => {
  return (
    <HContent>
      <Title title="공지 확인하기" description="우리 학교 공지를 한곳에서 빠르게" />
      <Tabs />
      <NoticeList />
    </HContent>
  );
};

export default MainContent;
