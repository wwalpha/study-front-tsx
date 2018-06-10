import { handleActions, Action } from 'redux-actions';
import { Payload } from 'typings';
import { SIGN_IN_SUCCESS } from '../constant/ActionTypes';
import Auth from 'src/models/Auth';

const auth = handleActions({

  [SIGN_IN_SUCCESS]: (store: Auth, action: Action<Payload.SignIn>) => action.payload && store.signIn(action.payload.user),

}, new Auth());

export default auth;
