import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import createstore from './src/store';
import App from './src/container/App';
import Login from './src/components/auth/SignIn';
import Register from './src/components/auth/SignUp';
import Confirm from './src/components/auth/Confirm';
import Forgot from './src/components/auth/Forgot';
import ForgotRenew from './src/components/auth/ForgotRenew';
import { ConnectedRouter, connectRouter } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import reducer from './src/reducers';
import Amplify from 'aws-amplify';

const history = createBrowserHistory();
const store = createstore(history);
const root = document.getElementById('root');

Amplify.configure({
  Auth: {
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_GXUriRkpY',
    userPoolWebClientId: '4bp5nqfb6kp1ddk0moq4tl23a8',
  },
});

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
