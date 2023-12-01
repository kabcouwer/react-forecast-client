import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3', // Set your primary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Set your preferred font family
  },
  spacing: 4, // Set a base spacing unit (will be used for margins and paddings)
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
