import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#FFD700',
    },
    secondary: {
      main: '#000080',
    },
    transparent: {
        main:'00000000'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#00000000'
    },
  },
});