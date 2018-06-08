import { createStore, applyMiddleware, compose, Store } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { apiMiddleware as api } from 'redux-api-middleware';
import { History } from 'history';
import reducer from '../reducers';

const store = (history: History): Store<any> => createStore(
  connectRouter(history)(reducer),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      api,
    ),
  ),
);

export default store;
