// Import
import { combineReducers } from 'redux';
import signUpReducer from './signUp';
import loginReducer from './login';
import potsReducer from './pots';

// CombineReducer
const rootReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
  pots: potsReducer,
});

// Export
export default rootReducer;
