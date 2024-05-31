import { useMediaQuery } from 'react-responsive';

const getDeviceType = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });

  if (isDesktop) return 'desktop';
  if (isTablet) return 'tablet';
  if (isMobile) return 'mobile';
};

export default getDeviceType;
