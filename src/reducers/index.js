import * as actions from '../actions';

const initialState = {
  boards: {
    'testBoard': []
  },
  'inputVal': ''
};

export const trelloishReducer = (state=initialState, action) => {
  if (action.type === actions.CHANGE_INPUT) {
    return Object.assign({}, state, {
      inputVal: action.inputVal
    });
  }

  if (action.type === actions.ADD_BOARD) {
    const boardClone = Object.assign({}, state.boards);
    boardClone[action.boardTitle] = {};

    return Object.assign({}, state, {
      boards: boardClone
    });
  }

  return state;
}
