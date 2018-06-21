import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch } from 'react-router-dom';
import withRoot from 'src/withRoot';
import Auth from './auth/Auth';
import App from './App';
import Top from './app/Top'

class Router extends React.Component<any, any> {

  render() {
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
