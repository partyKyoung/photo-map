export interface ThemeProps {
  color: {
    shinhan: string;
    primaryMain: string;
    primarySub: string;
    primaryViolet: string;
    success: string;
    information: string;
    white: string;
    black: string;
    grey: string;
    lighterGrey: string;
    lightGrey: string;
    shadow: string;
    background: string;
    content: string;
    primaryLoader: string;
    secondaryLoader: string;
    grey50: string;
    grey70: string;
    grey100: string;
    grey200: string;
    grey300: string;
    grey400: string;
    grey500: string;
    grey600: string;
    grey700: string;
    grey800: string;
    red400: string;
    red500: string;
    blue500: string;
    yellow300: string;
  };

  font: {
    family: string;
    base: string;
    small: string;
    xsmall: string;
    large: string;
    xlarge: string;
    xxlarge: string;
    xxxlarge: string;
  };

  breakPoints: {
    mobileS: string;
    mobile: string;
    tablet: string;
    desktop: string;
    desktopL: string;
  };
}

const theme: ThemeProps = {
  color: {
    shinhan: '#258eea',
    primaryMain: '#f70000',
    primarySub: '#ff5058',
    primaryViolet: '#623eff',
    success: '#00aa34',
    information: '#007dff',
    white: '#ffffff',
    black: '#333333',
    grey: '#888888',
    lighterGrey: '#fafafa',
    lightGrey: '#cccccc',
    shadow: '#eeeeee',
    background: '#f5f5f5',
    content: '#ffffff',
    primaryLoader: '#f3f3f3',
    secondaryLoader: '#ecebeb',

    grey50: '#fafafa',
    grey70: '#f5f5f5',
    grey100: '#eeeeee',
    grey200: '#e5e5e5',
    grey300: '#d2d2d2',
    grey400: '#cccccc',
    grey500: '#b2b2b2',
    grey600: '#999999',
    grey700: '#888888',
    grey800: '#666666',
    red400: '#ff5058',
    red500: '#f70000',
    blue500: '#007dff',
    yellow300: '#ffde85',
  },

  font: {
    family:
      "'Noto Sans KR', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
    xsmall: '9px',
    small: '10px',
    base: '13px',
    large: '15px',
    xlarge: '20px',
    xxlarge: '25px',
    xxxlarge: '31px',
  },

  breakPoints: {
    mobileS: '(max-width: 320px)',
    mobile: '(min-width: 376px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 992px)',
    desktopL: '(min-width: 1200px)',
  },
};

export default theme;
