const MAIN_CONTENT = Object.freeze({
  firstTitle: `학교 공지만\n한곳에 모아\n빠르고, 쉽게`,
  secondTitle: `학교 공지를\n핸드폰 알림으로\n더 간편하게`,
  description:
    '학교 홈페이지에 있는 어쩌구 엄청 많은 콘텐츠들 어쩌구 딱 공지만 모아서 정리해 줌 그래서 우리 어쩌구 어떤 말을 써야 할지 모르겠지만 소개 어쩌구 이러합니다',
});

const NOTICE_CONTENT = Object.freeze({
  title: '공지 확인하기',
  description: '우리 학교 공지를 한곳에서 빠르게',
});

const EMPTY_TEXT = Object.freeze({
  text: '최근 일주일 간 올라온 공지가 없어요.',
});

export interface INoticeTabs {
  general: string;
  event: string;
  scholarship: string;
  academic: string;
}

const NOTICE_TABS: INoticeTabs = {
  general: '일반',
  event: '행사',
  scholarship: '장학',
  academic: '학사',
};

export { MAIN_CONTENT, NOTICE_CONTENT, EMPTY_TEXT, NOTICE_TABS };
