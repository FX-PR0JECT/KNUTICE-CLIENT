import { COLORS } from '@/constants/color';

export const THEME = {
  dark: {
    backgroundColor: COLORS['bg-dark'],

    // Main
    color: COLORS['font-dark'],
    borderColor: COLORS['border-dark'],

    // Navbar
    borderBottom: COLORS['border-bottom-dark'],

    // NoticeList
    cardItemBg: COLORS['card-bg-dark'],

    // Tabs
    tabBgColor: COLORS['tab-bg-dark'],
    selectedTabBg: COLORS['s-tab-bg-dark'],
    selectedTabColor: COLORS['s-tab-color-dark'],
  },

  light: {
    backgroundColor: COLORS['bg-light'],

    // Main
    color: COLORS['font-light'],
    borderColor: COLORS['border-light'],

    // Navbar
    borderBottom: COLORS['border-bottom-light'],

    // NoticeList
    cardItemBg: COLORS['card-bg-light'],

    // Tabs
    tabBgColor: COLORS['tab-bg-light'],
    selectedTabBg: COLORS['s-tab-bg-light'],
    selectedTabColor: COLORS['s-tab-color-light'],
  },
};
