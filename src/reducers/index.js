import { combineReducers } from 'redux';

import signUpReducer from './signUp';
import loginReducer from './login';

const rootReducer = combineReducers({
  signUp: signUpReducer,
  login: loginReducer,
});

export default rootReducer;
