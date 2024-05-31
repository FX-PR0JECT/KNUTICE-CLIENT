'use client';

import { ThemeProvider } from 'styled-components';

import getDeviceType from '@/app/utils';
import useTheme from '@/hooks/useTheme';
import { THEME } from '@/styles/theme';
import { Navbar, Home, FirstSection, SecondSection } from '@/components';

const Main = () => {
  const { isDarkMode, switchTheme } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? THEME.dark : THEME.light}>
      <Home>
        <Navbar mode={isDarkMode} themeHandler={switchTheme} device={getDeviceType()} />
        <FirstSection device={getDeviceType()} />
        <SecondSection device={getDeviceType()} />
      </Home>
    </ThemeProvider>
  );
};

export default Main;
