// Import
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';

// connect middleware
import loginMiddleWare from '../middlewares/login';
import signUpMiddleWare from '../middlewares/signUp';
import potsMiddleWare from '../middlewares/pots';

// we put together the redux devtools and our middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// we put together our middlewares
const enhancers = composeEnhancers(
  applyMiddleware(loginMiddleWare, signUpMiddleWare, potsMiddleWare),
);

// create the store to which we pass the reducer and the middlewares
// (with the devtool)
const store = createStore(reducer, enhancers);

// Export
export default store;
