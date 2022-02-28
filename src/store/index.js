import { createStore, applyMiddleware } from 'redux';

import reducer from 'src/reducers';

// connect middleware
import apiMiddleWare from '../middlewares/api';

const store = createStore(
  reducer, (applyMiddleware(apiMiddleWare)),
);

export default store;
