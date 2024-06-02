'use client';

import { NOTICE_CONTENT } from '@/constants/content';
import { HContent, Title, Tabs, NoticeList } from '@/components';

const MainContent = ({ device }: { device: TDevice }) => {
  return (
    <HContent device={device}>
      <Title
        device={device}
        title={NOTICE_CONTENT.title}
        description={NOTICE_CONTENT.description}
      />
      <Tabs device={device} />
      <NoticeList device={device} />
    </HContent>
  );
};

export default MainContent;
