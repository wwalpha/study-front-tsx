import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import auth from './auth';
import app from './app';

// import word from './word';

export default combineReducers({
  form: formReducer,
  app,
  auth,
  // word,
});
