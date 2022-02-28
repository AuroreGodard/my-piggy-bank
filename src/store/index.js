import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
// connect middleware
import loginMiddleWare from '../middlewares/login';
import signUpMiddleWare from '../middlewares/signUp';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(loginMiddleWare, signUpMiddleWare),
);

const store = createStore(reducer, enhancers);

export default store;
