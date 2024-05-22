'use client';

import { ThemeProvider } from 'styled-components';
import useTheme from '@/hooks/useTheme';
import { Navbar, Home, MainContent } from '@/components';
import { THEME } from '@/styles/theme';

const Notice = () => {
  const { isDarkMode, switchTheme } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? THEME.dark : THEME.light}>
      <Home>
        <Navbar mode={isDarkMode} themeHandler={switchTheme} />
        <MainContent />
      </Home>
    </ThemeProvider>
  );
};

export default Notice;
