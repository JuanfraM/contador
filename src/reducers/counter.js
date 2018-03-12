import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default  (state = initialState.score, action) => {
  switch (action.type) {
    case types.INCREMENT_LEFT:
      return {...state, left: state.left + action.count}
    case types.DECREMENT_LEFT: {
      const count = action.count;
      const newScore = (state.left - count < 0) ? 0 : state.left - count;
      return {...state, left: newScore}
    }
    case types.INCREMENT_RIGHT:
      return {...state, right: state.right + action.count}
    case types.DECREMENT_RIGHT: {
      const count = action.count;
      const newScore = (state.right - count < 0) ? 0 : state.right - count;
      return {...state, right: newScore}
    }
    default:
      return state
  }
}
