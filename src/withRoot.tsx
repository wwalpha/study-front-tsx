import * as React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: blue['500'],
      main: blue['700'],
      dark: blue['900'],
    },
    secondary: {
      light: green['600'],
      main: green['800'],
      dark: green['900'],
    },
  },
});

// tslint:disable-next-line:variable-name
function withRoot(Component: any): (props: any) => any {
  // tslint:disable-next-line:function-name
  function WithRoot(props: any) {
    // MuiThemeProvider makes the theme available down the React tree
    // thanks to React context.
    console.error(theme);
    return (
      <MuiThemeProvider theme={theme}>
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
