'use client';

import { NOTICE_CONTENT } from '@/constants/content';
import { HContent, Title, Tabs, NoticeList } from '@/components';

const MainContent = () => {
  return (
    <HContent>
      <Title title={NOTICE_CONTENT.title} description={NOTICE_CONTENT.description} />
      <Tabs />
      <NoticeList />
    </HContent>
  );
};

export default MainContent;
