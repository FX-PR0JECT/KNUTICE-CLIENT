'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

import { API_URL } from '@/services/api';
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

interface INotice {
  departName: string;
  nttId: number;
  registrationDate: string;
  title: string;
}

interface INoticeCard {
  notice: INotice;
  selectedTab: string;
}

const NoticeList = () => {
  const params = useSearchParams();
  const [notices, setNotices] = useState([]);
  const selectedTab = params.get('tab') || 'academic';

  useEffect(() => {
    const fetchNotices = async () => {
      let url = `${API_URL}/`;

      switch (selectedTab) {
        case 'academic':
          url += 'academicNews?page=0&size=18';
          break;
        default:
          return;
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
    if (selectedTab === 'academic') return '#학사공지사항 #acadmic';
  };

  return (
    <CardWrapper>
      <LinkItem href="/notice">
        <CardItem>
          <DefaultImage />
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
