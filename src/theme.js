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
      primary: '#09172F',
      secondary: '#fff'
    }
  },
});

export default theme;
