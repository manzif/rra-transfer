import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFA500',
    },
    background: {
        default: '#ffffff'
    },
    secondary: {
      main: '#1A1A1D'
    }
  },
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
    button: {
      textTransform: 'none'
    }
  }
});

export default theme;