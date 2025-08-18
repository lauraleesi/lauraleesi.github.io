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
});

export const themeRed = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      dark: '#aa2e25',
      main: '#f44336',
      light: '#f6685e',
    },
    secondary: {
      dark: '#4615b2',
      main: '#651fff',
      light: '#834bff',
    },
  },
});