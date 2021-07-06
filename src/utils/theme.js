import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    primary: {
      main: '#ffbd00',
    },
    secondary: {
      main: '#FFFFFF',
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