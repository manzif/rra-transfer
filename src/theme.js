import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFA500',
    },
    background: {
        default: '#ffffff'
    }
  },
  typography: {
    fontFamily: [
      'Chilanka',
      'cursive',
    ].join(','),
  }
});

export default theme;