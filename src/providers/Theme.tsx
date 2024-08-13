import { FC } from 'react';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';
import { PropsWithChildren } from '../resources/PropsWithChildren';

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <>{children}</>
    </MuiThemeProvider>
  );
};
