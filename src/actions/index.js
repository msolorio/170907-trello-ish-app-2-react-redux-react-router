export const CHANGE_INPUT = 'CHANGE_INPUT';
export const changeInput = (inputVal) => ({
  type: CHANGE_INPUT,
  inputVal
});

export const ADD_BOARD = 'ADD_BOARD';
export const addBoard = (boardTitle) => ({
  type: ADD_BOARD,
  boardTitle
});
