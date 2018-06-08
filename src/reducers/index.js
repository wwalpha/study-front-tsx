import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form/immutable';
import app from './app';
// import word from './word';

export default combineReducers({
  form: formReducer,
  app,
  // word,
});
