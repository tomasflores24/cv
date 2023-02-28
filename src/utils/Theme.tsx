import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#0f1725',
      light: '#1f2937',
    },
    secondary: {
      main: '#34d399 ',
    },
    background: {
      default: '#3a4f6c',
    },
  },
});

export default theme;
