export const departmentTag = (selectedTab: string) => {
  if (selectedTab === 'general') return '#일반소식 #general';
  if (selectedTab === 'event') return '#행사안내 #event';
  if (selectedTab === 'scholarship') return '#장학안내 #scholarship';
  if (selectedTab === 'academic') return '#학사공지사항 #academic';
};
