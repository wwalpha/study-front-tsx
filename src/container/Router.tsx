import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import withRoot from 'src/withRoot';
import Auth from './auth/Auth';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';
import Confirm from './auth/Confirm';
import Forgot from './auth/Forgot';
import App from './App';
import Top from './Top';

class Router extends React.Component<any, any> {

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <Switch>
          <Route path="/auth" component={Auth} />
          <App>
            <Switch>
              <Route exact path="/" component={Top} />
            </Switch>
          </App>
        </Switch>
      </React.Fragment>
    );
  }
}

export default hot(module)(withRoot(Router));
