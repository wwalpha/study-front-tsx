import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './src/store';
import App from './src/container/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
