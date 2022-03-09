// ACTION TYPE LOGIN
export const LOGIN = 'LOGIN';

// ACTION CREATOR login
export const login = () => ({
  type: LOGIN,
});

// ACTION TYPE SAVE_USER
export const SAVE_TOKEN = 'SAVE_TOKEN';

// ACTION CREATOR saveUser
export const saveToken = (token) => ({
  type: SAVE_TOKEN,
  token,
});

// ACTION TYPE SET_NEW_PASSWORD
export const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD';

// ACTION TYPE setNewPassword
export const setNewPassword = (password) => ({
  type: SET_NEW_PASSWORD,
  password,
});

// ACTION TYPE SET_NEW_USERNAME
export const SET_NEW_USERNAME = 'SET_NEW_USERNAME';

// ACTION TYPE setNewUserName
export const setNewUserName = (username) => ({
  type: SET_NEW_USERNAME,
  username,
});

// ACTION TYPE FETCH_USERS
export const FETCH_USERS = 'FETCH_USERS';

// ACTION CREATOR fetchFavorites
export const fetchUsers = () => ({
  type: FETCH_USERS,
});

// ACTION TYPE SAVE_USERS_API
export const SAVE_USERS_API = 'SAVE_USERS_API';

// ACTION CREATOR saveFavorites
export const saveUserApi = (user) => ({
  type: SAVE_USERS_API,
  user,
  logged: true,
});

// ACTION TYPE LOGOUT
export const LOGOUT = 'LOGOUT';

// ACTION CREATOR logout
export const logout = () => ({
  type: LOGOUT,
});

// ACTION TYPE SAVE_TOKEN_FROM_LOCALSTORAGE
export const SAVE_TOKEN_FROM_LOCALSTORAGE = 'SAVE_TOKEN_FROM_LOCALSTORAGE';

// ACTION CREATOR saveTokenFromLocalStorage
export const saveTokenFromLocalStorage = (tokenfls) => ({
  type: SAVE_TOKEN_FROM_LOCALSTORAGE,
  tokenfls,
});

// ACTION TYPE SAVE_USER_FROM_LOCALSTORAGE
export const SAVE_USER_FROM_LOCALSTORAGE = 'SAVE_USER_FROM_LOCALSTORAGE';

// ACTION CREATOR saveUserFromLocalStorage
export const saveUserFromLocalStorage = (user) => ({
  type: SAVE_USER_FROM_LOCALSTORAGE,
  user,
});
