import { handleActions } from 'redux-actions';
// import { USERS_SUCCESS, SELECT_USER } from 'src/constant/ActionTypes';
import App from 'src/models/App';

const app = handleActions({

  // [USERS_SUCCESS]: (state, action) => state.setUsers(action.payload),

  // [SELECT_USER]: (state, action) => state.setUserProps(action.payload),

}, new App());

export default app;
