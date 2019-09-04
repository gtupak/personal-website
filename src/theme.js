import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#09172F',
    },
    secondary: {
      main: '#FF1744',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#09172F'
    }
  },
});

export default theme;
