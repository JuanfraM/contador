import * as types from './actionTypes';

export const incrementLeft = (count = 0, finalScore = 0) => ({
  count,
  finalScore,
  type: types.INCREMENT_LEFT
});

export const incrementRight = (count = 0, finalScore = 0) => ({
  count,
  finalScore,
  type: types.INCREMENT_RIGHT
});

export const decrementLeft = (count = 0, finalScore = 0) => ({
  count,
  finalScore,
  type: types.DECREMENT_LEFT
});

export const decrementRight = (count = 0, finalScore = 0) => ({
  count,
  finalScore,
  type: types.DECREMENT_RIGHT
});

export const resetGame = () => ({
  type: types.RESET_GAME
});
