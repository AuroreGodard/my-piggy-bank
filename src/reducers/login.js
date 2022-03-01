import { SAVE_TOKEN, SET_NEW_USERNAME, SET_NEW_PASSWORD, SAVE_USERS_API } from '../actions/login';

const initialState = {
  username: 'admin@admin.com',
  password: 'admin',
  user: '',
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
    case SAVE_USERS_API:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
