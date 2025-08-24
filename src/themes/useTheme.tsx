import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeDefault, themeAlt } from './themes';


interface MuiThemeProviderProps {
  children: ReactNode;
}

const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => (
  <ThemeProvider theme={themeAlt}>
    {children}
  </ThemeProvider>
);

export default MuiThemeProvider;