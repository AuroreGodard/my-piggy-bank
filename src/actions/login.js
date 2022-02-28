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
