'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import { API_URL } from '@/services/api';
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
import { ContentImage } from '@/components';

interface INotice {
  departName: string;
  nttId: number;
  registrationDate: string;
  title: string;
  contentURL: string;
  contentImage: string;
}

interface INoticeCard {
  notice: INotice;
  selectedTab: string;
}

const NoticeList = () => {
  const params = useSearchParams();
  const [notices, setNotices] = useState([]);
  const selectedTab = params.get('tab') || 'general';

  useEffect(() => {
    const fetchNotices = async () => {
      let url = `${API_URL}/`;

      switch (selectedTab) {
        case 'general':
          url += 'generalNews?size=18';
          break;
        case 'event':
          url += 'eventNews?size=18';
          break;
        case 'scholarship':
          url += 'scholarshipNews?size=18';
          break;
        case 'academic':
          url += 'academicNews?size=18';
          break;
      }

      const response = await fetch(url, { cache: 'no-store' });
      const data = await response.json();

      setNotices(data.data);
    };

    fetchNotices();
  }, [selectedTab]);

  return (
    <NoticeCardList>
      {notices.map((notice: INotice) => (
        <NoticeCard key={notice.nttId} selectedTab={selectedTab} notice={notice} />
      ))}
    </NoticeCardList>
  );
};

const NoticeCard = ({ notice, selectedTab }: INoticeCard) => {
  const department = (selectedTab: string) => {
    if (selectedTab === 'general') return '#일반소식 #general';
    if (selectedTab === 'event') return '#행사안내 #event';
    if (selectedTab === 'scholarship') return '#장학안내 #scholarship';
    if (selectedTab === 'academic') return '#학사공지사항 #acadmic';
  };

  return (
    <CardWrapper>
      <LinkItem href={notice.contentURL}>
        <CardItem>
          <ContentImage imageURL={notice.contentImage} />
          <Notice>
            <Title>{notice.title}</Title>
            <Department>{notice.departName}</Department>
            <Classification>{department(selectedTab)}</Classification>
            <RegistrationDate>{notice.registrationDate}</RegistrationDate>
          </Notice>
        </CardItem>
      </LinkItem>
    </CardWrapper>
  );
};

export default NoticeList;
