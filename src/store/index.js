import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware as api } from 'redux-api-middleware';
import logger from 'redux-logger';
// import reducer from '../reducers';

/* eslint-disable */
const store = createStore(
  // reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(api, logger),
);

// if(module.hot) {
//   module.hot.accept('../reducers', () => store.replaceReducer(reducer));
// }

export default store;
