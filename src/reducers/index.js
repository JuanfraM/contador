import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { sessionReducer } from 'redux-react-session';
import authReducer from './authReducer';
import score from './counter';
import names from './names';
import gamePlaying from './gameSettings';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routerReducer,
  session: sessionReducer,
  score: score,
  auth: authReducer,
  gamePlaying: gamePlaying,
  names: names,
});

export default rootReducer;
