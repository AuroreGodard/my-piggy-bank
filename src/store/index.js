import { createStore, applyMiddleware } from 'redux';

import reducer from 'src/reducers';
// on vient brancher le middleware
import apiMiddleWare from '../middlewares/api';

const store = createStore(
  reducer, (applyMiddleware(apiMiddleWare)),
);

export default store;
