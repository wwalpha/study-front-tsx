import { handleActions, Action } from 'redux-actions';
import { SIGN_IN_SUCCESS } from '../constant/ActionTypes';
import Auth from 'src/models/Auth';

const auth = handleActions({

  [SIGN_IN_SUCCESS]: (store: Auth, action: Action<{}>) => action.payload && store.signIn(action.payload),

}, new Auth());

export default auth;
