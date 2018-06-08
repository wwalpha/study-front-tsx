import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import createstore from './src/store';
import App from './src/container/App';
import Login from './src/components/login/Login';
import Register from './src/components/login/Register';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const store = createstore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </App>
    </ConnectedRouter>
  </Provider >,
  document.getElementById('root'),
);
