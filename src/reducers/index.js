// Import
import { combineReducers } from 'redux';
import signUpReducer from './signUp';
import loginReducer from './login';
import potsReducer from './pots';
import userProfileReducer from './userProfile';

// CombineReducer
const rootReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
  pots: potsReducer,
  userProfile: userProfileReducer,
});

// Export
export default rootReducer;
