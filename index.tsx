import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { ConnectedRouter, connectRouter } from 'connected-react-router/immutable';
import { createBrowserHistory } from 'history';
import Amplify from 'aws-amplify';
import reducer from './src/reducers';
import createstore from './src/store';
import Router from './src/container/Router';


const history = createBrowserHistory();
const store = createstore(history);
const root = document.getElementById('root');

Amplify.configure({
  Auth: {
    region: 'ap-northeast-1',
    userPoolId: 'ap-northeast-1_GXUriRkpY',
    userPoolWebClientId: '4bp5nqfb6kp1ddk0moq4tl23a9',
  },
});

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router />
    </ConnectedRouter>
  </Provider >,
  root,
);

if (module.hot) {
  module.hot.accept('./src/reducers', () => store.replaceReducer(connectRouter(history)(reducer)));
}
