import { handleActions } from 'redux-actions';
import {
  NEXT_SUCCESS, SAVE_SUCCESS, RESET_SUCCESS,
  PREV_PAGE, NEXT_PAGE, CHECKED, FAVORITE,
} from 'src/constant/ActionTypes';
import Words from 'src/models/Words';

const word = handleActions({

  [NEXT_SUCCESS]: (state, action) => state.addWords(action.payload),

  [SAVE_SUCCESS]: state => state.clearSave(),

  [RESET_SUCCESS]: state => state.clearRest(),

  [PREV_PAGE]: state => state.prevPage(),

  [NEXT_PAGE]: state => state.nextPage(),

  [CHECKED]: (state, action) => state.setSelected(action.payload.rowIndex),

  [FAVORITE]: (state, action) => state.setFavorite(action.payload.rowIndex),

}, new Words());

export default word;
