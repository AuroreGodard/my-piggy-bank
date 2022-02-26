import { createStore, applyMiddleware } from 'redux';
// on vient brancher le middleware
import apiMiddleWare from '../middlewares/api';

import reducer from 'src/reducers';

const store = createStore(
  reducer, (applyMiddleware(apiMiddleWare)),
);

export default store;
