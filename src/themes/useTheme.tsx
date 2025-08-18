import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { themeDefault, themeRed } from './themes';



interface MuiThemeProviderProps {
  children: ReactNode;
}

const MuiThemeProvider: React.FC<MuiThemeProviderProps> = ({ children }) => (
  <ThemeProvider theme={themeDefault}>
    {children}
  </ThemeProvider>
);

export default MuiThemeProvider;

// import * as React from 'react';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { lime, purple } from '@mui/material/colors';
// import Button from '@mui/material/Button';

// const themeDefault = createTheme({
//   palette: {
//     primary: lime,
//     secondary: purple,
//   },
// });

// export const ThemeWrapper:React.FC<{children: any}> = () => {
//   return (
//     <ThemeProvider theme={themeDefault}>
//     {children}
//     </ThemeProvider>
//   );
// }