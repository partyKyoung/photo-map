export interface ThemeProps {
  color: {
    white: string;
    black: string;
    primary: string;
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
    white: '#FFFFFF',
    black: '#1e1d29',
    primary: '#6fb4d6',
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
