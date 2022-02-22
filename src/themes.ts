import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle: React.CSSProperties;
    'caption-sm': React.CSSProperties;
    uiMicro: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle?: React.CSSProperties;
    'caption-sm'?: React.CSSProperties;
    uiMicro?: React.CSSProperties;
  }

  interface Palette {
    accentYellow: Palette['primary'];
    accentDarkBlue: Palette['primary'];
    accentBlue: Palette['primary'];
  }
  interface PaletteOptions {
    accentYellow: PaletteOptions['primary'];
    accentDarkBlue: PaletteOptions['primary'];
    accentBlue: PaletteOptions['primary'];
  }

  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    'sm-tab': true;
    tab: true;
    laptop: true;
    desktop: true;
    'lg-desktop': true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    black: true;
    'black-outline': true;
    grey: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle: true;
    'caption-sm': true;
    uiMicro: true;

    subtitle1: false;
    subtitle2: false;
  }
}

export const defaultTheme = createTheme({
  typography: {
    fontFamily: "'Baikal', sans-serif",
    htmlFontSize: 16,
    fontSize: 16,
    h1: {
      fontWeight: 700,
      lineHeight: 1.125,
      fontSize: '3rem',
      '@media (max-width: 639px)': {
        lineHeight: 1.3,
        fontSize: '2rem',
      },
    },
    h2: {
      fontWeight: 700,
      lineHeight: 1.2,
      fontSize: '2.5rem',
      '@media (max-width: 639px)': {
        lineHeight: 1.3,
        fontSize: '1.75rem',
      },
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.25,
      fontSize: '2rem',
      '@media (max-width: 639px)': {
        lineHeight: 1.4,
        fontSize: '1.5625rem',
      },
    },
    h4: {
      fontWeight: 700,
      lineHeight: 1.3,
      fontSize: '1.75rem',
      '@media (max-width: 639px)': {
        lineHeight: 1.4,
        fontSize: '1.375rem',
      },
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.33,
      fontSize: '1.5rem',
      '@media (max-width: 639px)': {
        lineHeight: 1.4,
        fontSize: '1.25rem',
      },
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.4,
      fontSize: '1.25rem',
      '@media (max-width: 639px)': {
        lineHeight: 1.44,
        fontSize: '1.125rem',
      },
    },
    body1: {
      lineHeight: 1.33,
      fontSize: '1.125rem',
      '@media (max-width: 639px)': {
        lineHeight: 1.5,
        fontSize: '1rem',
      },
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.5,
      '@media (max-width: 639px)': {
        lineHeight: 1.47,
        fontSize: '0.9375rem',
      },
    },
    subtitle: {
      fontSize: '0.875rem',
      lineHeight: 1.43,
      //@ts-ignore
      '@media (max-width: 639px)': {
        lineHeight: 1.38,
        fontSize: '0.8125rem',
      },
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
    },
    'caption-sm': {
      fontSize: '0.6875rem',
      lineHeight: 1.45,
    },
    overline: {
      fontSize: '0.6875rem',
      lineHeight: 1.45,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
    },
    uiMicro: {
      fontSize: '0.5rem',
      lineHeight: 1.3,
      textTransform: 'uppercase',
      letterSpacing: '0.04em',
    },
    button: {
      fontSize: '1rem',
      lineHeight: 1,
      fontWeight: 400,
    },
  },
  palette: {
    common: {
      black: '#090909',
      white: '#fff',
    },
    primary: {
      light: '#D6F8FF',
      main: '#07D3FC',
      dark: '#079FBD',
    },
    secondary: {
      light: '#E7F1FF',
      main: '#0C59BD',
      dark: '#0B3E82',
    },
    accentBlue: {
      light: '#DDFFFF',
      main: '#00F5F3',
      dark: '#11C8C6',
    },
    accentYellow: {
      light: '#FFFACF',
      main: '#FFEC3F',
      dark: '#E9D200',
    },
    accentDarkBlue: {
      light: '#E7EAED',
      main: '#112B4E',
      dark: '#041936',
    },
    grey: {
      100: '#F3F3F3',
      200: '#E6E6E6',
      300: '#CECECE',
      400: '#9D9D9D',
      500: '#6B6B6B',
      600: '#3A3A3A ',
    },
    error: {
      light: '#F0949A',
      main: '#FF4E4E',
      dark: '#D11C1C ',
    },
    success: {
      light: '#CEF2DA',
      main: '#179942',
      dark: '#0B6B2B',
    },
    text: {
      primary: '#090909',
    },
    background: {
      default: '#fff',
    },
  },
  shape: {
    borderRadius: 5,
  },
  breakpoints: {
    values: {
      mobile: 0,
      'sm-tab': 640,
      tab: 768,
      laptop: 992,
      desktop: 1024,
      'lg-desktop': 1280,
    },
  },
});

defaultTheme.components = {
  MuiCssBaseline: {
    styleOverrides: `
        @font-face {
          font-family: 'Baikal';
          src: url('${process.env.CDN_URL}/fonts/Baikal/Baikal-VF-subset.woff2') format('woff2'), url('${process.env.CDN_URL}/fonts/Baikal/Baikal-VF-subset.woff') format('woff');
          unicode-range: U+A, U+20-22, U+25-50, U+52-57, U+59, U+5A, U+5F, U+61-7A, U+A9, U+2019, U+20B9;
          font-weight: 100 1000;
          font-stretch: 25% 200%;
          font-display: swap;
        }
      `,
  },
  MuiButton: {
    defaultProps: {
      disableElevation: true,
      size: 'large',
      color: 'primary',
      variant: 'contained',
    },
    styleOverrides: {
      root: {
        textTransform: 'none',
        textAlign: 'center',
        '&>*': {
          lineHeight: '1em',
        },
      },
    },
    variants: [
      {
        props: {
          variant: 'contained',
        },
        style: {
          color: defaultTheme.palette.common.white,
          backgroundColor: defaultTheme.palette.common.black,
          '&:hover': {
            backgroundColor: defaultTheme.palette.grey[600],
          },
          '&:disabled': {
            backgroundColor: defaultTheme.palette.grey[100],
            color: defaultTheme.palette.grey[200],
          },
        },
      },
      {
        props: {
          variant: 'outlined',
        },
        style: {
          color: defaultTheme.palette.common.black,
          backgroundColor: defaultTheme.palette.common.white,
          border: `1px solid ${defaultTheme.palette.common.black}`,
          '&:hover': {
            borderColor: defaultTheme.palette.grey[300],
          },
          '&:disabled': {
            backgroundColor: defaultTheme.palette.grey[100],
            color: defaultTheme.palette.grey[200],
          },
        },
      },
      {
        props: {
          size: 'large',
        },
        style: {
          fontSize: defaultTheme.typography.body1.fontSize,
          height: '3rem',
        },
      },
      {
        props: {
          size: 'medium',
        },
        style: {
          fontSize: defaultTheme.typography.subtitle.fontSize,
          height: '2.5rem',
        },
      },
      {
        props: {
          size: 'small',
        },
        style: {
          fontSize: defaultTheme.typography.caption.fontSize,
          height: '2rem',
        },
      },
      {
        props: {
          variant: 'contained',
          color: 'error',
        },
        style: {
          backgroundColor: `${defaultTheme.palette.error.light}80`,
          color: defaultTheme.palette.error.main,
          '&:hover': {
            backgroundColor: defaultTheme.palette.error.light,
          },
        },
      },
    ],
  },
  MuiLink: {
    defaultProps: {
      underline: 'none',
    },
    styleOverrides: {
      root: {
        transition: defaultTheme.transitions.create('color'),
      },
    },
  },
};
