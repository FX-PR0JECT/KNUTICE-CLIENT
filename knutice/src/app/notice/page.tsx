'use client';

import { ThemeProvider } from 'styled-components';

import getDeviceType from '@/app/utils';
import useTheme from '@/hooks/useTheme';
import { THEME } from '@/styles/theme';
import { Navbar, Home, MainContent } from '@/components';

const Notice = () => {
  const { isDarkMode, switchTheme } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? THEME.dark : THEME.light}>
      <Home>
        <Navbar mode={isDarkMode} themeHandler={switchTheme} device={getDeviceType()} />
        <MainContent device={getDeviceType()} />
      </Home>
    </ThemeProvider>
  );
};

export default Notice;
