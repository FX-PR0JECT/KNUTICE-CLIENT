'use client';

import { TabList, ItemWrapper, Item } from '@/styles/Notice/Tabs';

const Tabs = () => {
  return (
    <TabList>
      <Tab content="일반" />
      <Tab content="행사" />
      <Tab content="장학" />
      <Tab content="학사" />
    </TabList>
  );
};

const Tab = ({ content }: { content: string }) => {
  return (
    <ItemWrapper>
      <Item href="/notice">{content}</Item>
    </ItemWrapper>
  );
};

export default Tabs;
