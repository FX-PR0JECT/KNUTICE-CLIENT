'use client';

import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'next/navigation';
import { forwardRef, useCallback, useRef, Fragment } from 'react';

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
import { API_URL } from '@/services/api';
import { ContentImage } from '@/components';
import { departmentTag } from '@/utils/departmentTag';

interface INotice {
  departName: string;
  nttId: number;
  registrationDate: string;
  title: string;
  contentURL: string;
  contentImage: string;
  boardNumber: number;
}

interface INoticeCard {
  notice: INotice;
  selectedTab: string;
}

const NoticeList = () => {
  const params = useSearchParams();
  const selectedTab = params.get('tab') || 'general';
  const observer = useRef<IntersectionObserver | null>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isError, isLoading } =
    useInfiniteQuery(
      ['notices', selectedTab],
      async ({ pageParam }) => {
        const url = pageParam
          ? `${API_URL}/${selectedTab}News?startBoardNumber=${pageParam}&size=18`
          : `${API_URL}/${selectedTab}News?size=18`;

        const response = await fetch(url, { cache: 'no-store' });
        const result = await response.json();

        return result.data;
      },
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.length < 18) return undefined;
          return lastPage[lastPage.length - 1].boardNumber;
        },
        retry: 0,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      }
    );

  const lastNoticeElementRef = useCallback(
    (node: HTMLLIElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) fetchNextPage();
      });

      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  /* skeleton component 추가 필요 */
  if (!data || isLoading) return <div>로딩 중...</div>;
  if (isError) return <></>;

  return (
    <NoticeCardList>
      {data.pages.map((notices, i) => (
        <Fragment key={i}>
          {notices.map((notice: INotice, index: number) => {
            if (notices.length === index + 1) {
              return (
                <NoticeCard
                  ref={lastNoticeElementRef}
                  key={notice.nttId}
                  selectedTab={selectedTab}
                  notice={notice}
                />
              );
            } else {
              return <NoticeCard key={notice.nttId} selectedTab={selectedTab} notice={notice} />;
            }
          })}
        </Fragment>
      ))}
    </NoticeCardList>
  );
};

const NoticeCard = forwardRef<HTMLLIElement, INoticeCard>(({ notice, selectedTab }, ref) => {
  return (
    <CardWrapper ref={ref}>
      <LinkItem href={notice.contentURL}>
        <CardItem>
          <ContentImage imageURL={notice.contentImage} />
          <Notice>
            <Title>{notice.title}</Title>
            <Department>{notice.departName}</Department>
            <Classification>{departmentTag(selectedTab)}</Classification>
            <RegistrationDate>{notice.registrationDate}</RegistrationDate>
          </Notice>
        </CardItem>
      </LinkItem>
    </CardWrapper>
  );
});

export default NoticeList;
