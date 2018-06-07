import * as React from 'react';
import { hot } from 'react-hot-loader';
import { AppProps } from 'typings';
import Grid from '@material-ui/core/Grid';

import Login from 'src/components/login/Login';

const styles = {
  height: 'calc(100vh - 16px)',
};
class App extends React.Component<AppProps, any> {

  render() {
    return (
      <Grid
        container
        spacing={8}
        alignItems="center"
        justify="center"
        style={styles}
      >
        <Grid item>
          <Login />
        </Grid>
      </Grid>
    );
  }
}

export default hot(module)(App);
