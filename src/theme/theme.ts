import { ThemeOptions, createTheme } from '@mui/material/styles';
import colors from './colors';

const componentOverrides: ThemeOptions['components'] = {
  MuiTypography: {
    styleOverrides: {
      root: {
        fontFamily: 'Blissful Thinking, sans-serif',
      },
      h1: {
        fontSize: '70px',
        fontWeight: 400,
        color: colors.text,
        '@media (max-width: 768px)': {
          fontSize: '45px',
        },
        '@media (max-width: 400px)': {
          fontSize: '45px',
        },
      },
      h2: {
        fontSize: '45px',
        fontWeight: 800,
        color: colors.secondary,
        '@media (max-width: 768px)': {
          fontSize: '32px',
        },
        '@media (max-width: 400px)': {
          fontSize: '32px',
        },
      },
      // menu
      h3: {
        fontSize: '14px',
        fontWeight: 600,
        color: colors.secondary,
        '@media (max-width: 768px)': {
          fontSize: '1rem',
        },
        '@media (max-width: 400px)': {
          fontSize: '0.6rem',
        },
      },

      h4: {
        fontSize: '18px',
        fontWeight: 500,
        color: colors.text,
        '@media (max-width: 768px)': {
          fontSize: '1rem',
        },
        '@media (max-width: 400px)': {
          fontSize: '0.8rem',
        },
      },
      body1: {
        fontFamily: 'Roboto Flex, sans-serif',
        fontSize: '16px',
        color: colors.text,
        '@media (max-width: 768px)': {
          fontSize: '14px',
        },
        '@media (max-width: 400px)': {
          fontSize: '14px',
        },
      },
      body2: {
        fontFamily: 'Roboto Flex, sans-serif',
        fontSize: '0.8rem',
        fontWeight: 400,
        color: colors.secondary,
        '@media (max-width: 768px)': {
          fontSize: '0.6rem',
        },
        '@media (max-width: 400px)': {
          fontSize: '0.6rem',
        },
      },
    },
  },
  MuiInputBase: {
    styleOverrides: {
      root: {
        // height: '2.5rem',
        borderRadius: '8px',
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.25)',
        },
      },
    },
  },
  // MuiInputLabel: {
  //   styleOverrides: {
  //     focused: {
  //       color: colors.text,
  //     },
  //   },
  // },
  MuiButton: {
    styleOverrides: {
      root: {
        borderRadius: '8px',
        textTransform: 'none',
        fontWeight: 800,
        fontFamily: 'Blissful Thinking, sans-serif',
        // fontSize: '1.2rem',
      },
    },
  },
  MuiMenu: {
    styleOverrides: {
      paper: {
        backgroundColor: colors.primary,
      },
    },
  },
  MuiMenuItem: {
    styleOverrides: {
      root: {
        backgroundColor: colors.primary,
      },
    },
  },
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      paper: colors.cardbg,
    },
    success: {
      main: colors.success,
    },
    info: {
      main: colors.info,
    },
    warning: {
      main: colors.warning,
    },
    text: {
      primary: colors.text,
      secondary: colors.sub,
    },
  },
  components: componentOverrides,
});

export { theme };
