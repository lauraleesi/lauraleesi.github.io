import { createTheme } from "@mui/material";

export const themeDefault = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      dark: '#1769aa',
      main: '#2196f3',
      light: '#4dabf5',
    },
    secondary: {
      dark: '#4615b2',
      main: '#651fff',
      light: '#834bff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export const themeAlt = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      // dark: '#b96848',
      // main: '#c96e4a',
      // light: '#e27c53',
      dark: '#bc413f',
      main: '#c95656',
      light: '#c37274',
    },
    secondary: {
      dark: '#bc413f',
      main: '#c95656',
      light: '#c37274',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});