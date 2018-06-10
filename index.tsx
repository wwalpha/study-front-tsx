import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import createstore from './src/store';
import App from './src/container/App';
import Login from './src/components/login/Login';
import Register from './src/components/login/Register';
import Confirm from './src/components/login/Confirm';
import Forgot from './src/components/login/Forgot';
import ForgotRenew from './src/components/login/ForgotRenew';
import { ConnectedRouter, connectRouter } from 'connected-react-router/immutable';

import { createBrowserHistory } from 'history';
import reducer from './src/reducers';

const history = createBrowserHistory();
const store = createstore(history);
const root = document.getElementById('root');

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/confirm" component={Confirm} />
        <Route path="/forgot" component={Forgot} />
        <Route path="/forgotrenew" component={ForgotRenew} />
      </App>
    </ConnectedRouter>
  </Provider >,
  root,
);

if (module.hot) {
  module.hot.accept('./index.tsx', () =>
    render(
      <App />,
      root));

  module.hot.accept('./src/reducers', () => store.replaceReducer(connectRouter(history)(reducer)));
}
