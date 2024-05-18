'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { TabList, ItemWrapper, Item } from '@/styles/Notice/Tabs';

interface ITab {
  content: string;
  tabName: string;
  isSelected: boolean;
  onClick: (tabName: string) => void;
}

const Tabs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedTab, setSelectedTab] = useState('');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab) setSelectedTab(tab);
  }, [searchParams]);

  const handleTabClick = (tabName: string) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set('tab', tabName);
    router.push(`/notice?${params.toString()}`);

    setSelectedTab(tabName);
  };

  return (
    <TabList>
      <Tab
        content="일반"
        tabName="general"
        isSelected={selectedTab === 'general'}
        onClick={handleTabClick}
      />
      <Tab
        content="행사"
        tabName="event"
        isSelected={selectedTab === 'event'}
        onClick={handleTabClick}
      />
      <Tab
        content="장학"
        tabName="scholarship"
        isSelected={selectedTab === 'scholarship'}
        onClick={handleTabClick}
      />
      <Tab
        content="학사"
        tabName="academic"
        isSelected={selectedTab === 'academic'}
        onClick={handleTabClick}
      />
    </TabList>
  );
};

const Tab = ({ content, tabName, isSelected, onClick }: ITab) => {
  return (
    <ItemWrapper>
      <Item
        href="#"
        $isSelected={isSelected}
        onClick={(event) => {
          event.preventDefault();
          onClick(tabName);
        }}>
        {content}
      </Item>
    </ItemWrapper>
  );
};

export default Tabs;
