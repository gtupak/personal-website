import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const defaultTheme = createMuiTheme({
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

const { breakpoints } = defaultTheme;
const theme = {
  ...defaultTheme,
  overrides: {
    MuiTypography: {
      h2: {
        [breakpoints.down('sm')]: {
          fontSize: '3rem'
        }
      },
      h3: {
        [breakpoints.down('sm')]: {
          fontSize: '2.5rem'
        }
      },
      h4: {
        [breakpoints.down('sm')]: {
          fontSize: '1.8rem'
        }
      },
      h5: {
        [breakpoints.down('sm')]: {
          fontSize: '1.1rem'
        }
      }
    }
  }
}

export default theme;
