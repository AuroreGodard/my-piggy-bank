import {
  SAVE_TOKEN,
  SET_NEW_USERNAME,
  SET_NEW_PASSWORD,
  SAVE_USERS_API,
  LOGOUT,
  SAVE_TOKEN_FROM_LOCALSTORAGE,
} from '../actions/login';

const initialState = {
  username: 'admin@admin.com',
  password: 'admin',
  user: [],
  logged: false,
  token: '',
};

/* const initialState = {
  username: '',
  password: '',
  user: '',
  logged: false,
}; */

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_USERNAME:
      return {
        ...state,
        username: action.username,
        logged: true,
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
        logged: true,
      };
    case LOGOUT:
      return {
        ...state,
        logged: false,
        token: null,
        user: [],
      };
    case SAVE_TOKEN_FROM_LOCALSTORAGE:
      return {
        ...state,
        token: action.tokenfls,
        logged: true,
      };
    default:
      return state;
  }
};

export default reducer;
