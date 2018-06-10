import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import auth from './auth';
// import word from './word';

export default combineReducers({
  form: formReducer,
  auth,
  // word,
});
