'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { INoticeTabs, NOTICE_TABS } from '@/constants/content';
import { TabList, ItemWrapper, Item } from '@/styles/Notice/Tabs';

interface ITab {
  device: TDevice;
  content: string;
  tabName: string;
  isSelected: boolean;
  onClick: (tabName: string) => void;
}

const Tabs = ({ device }: { device: TDevice }) => {
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
      {(Object.keys(NOTICE_TABS) as Array<keyof INoticeTabs>).map((tab) => (
        <Tab
          device={device}
          key={tab}
          content={NOTICE_TABS[tab]}
          tabName={tab}
          isSelected={selectedTab === tab}
          onClick={() => handleTabClick(tab)}
        />
      ))}
    </TabList>
  );
};

const Tab = ({ device, content, tabName, isSelected, onClick }: ITab) => {
  return (
    <ItemWrapper>
      <Item
        $device={device}
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
