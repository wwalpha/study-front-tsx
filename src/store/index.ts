import { createStore, applyMiddleware, compose, Store } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router/immutable';
import { apiMiddleware as api } from 'redux-api-middleware';
import { History } from 'history';
import logger from 'redux-logger';
import reducer from '../reducers';
import * as Immutable from 'immutable';


const store = (history: History): Store<any> => createStore(
  connectRouter(history)(reducer),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__({
    serialize: {
      immutable: Immutable,
    },
  }),
  compose(
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      api,
      logger,
    ),
  ),
);

export default store;
