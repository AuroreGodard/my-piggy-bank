import { combineReducers } from 'redux';

import signUpReducer from './signUp';
import loginReducer from './login';
import potsReducer from './pots';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
  pots: potsReducer,
});

export default rootReducer;
