import { SAVE_TOKEN, SET_NEW_USERNAME, SET_NEW_PASSWORD } from '../actions/login';

const initialState = {
  username: 'admin@admin.com',
  password: 'admin',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case SAVE_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_NEW_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};

export default reducer;
