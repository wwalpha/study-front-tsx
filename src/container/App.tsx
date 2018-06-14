import * as React from 'react';
import { hot } from 'react-hot-loader';
import { IApp } from 'typings';
import { Route, Switch } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import withRoot from 'src/withRoot';
import Auth from './auth/Auth';
import SignUp from './auth/SignUp';

class App extends React.Component<IApp.Props, any> {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Auth />
        <Switch>
          <Route exact path="/app" component={Auth} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default hot(module)(withRoot(App));
