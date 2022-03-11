// Import
import {
  SET_NEW_BIRTHDATE,
  SET_NEW_EMAIL,
  SET_NEW_FIRSTNAME,
  SET_NEW_LASTNAME,
  SET_NEW_PASSWORD,
  SET_NEW_PHONE,
  SET_SAVE_FIRSTNAME,
  SET_SAVE_LASTNAME,
} from '../actions/signUp';

// initialState
const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  birthDate: '',
  phone: '',
};

// SignUp Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_NEW_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case SET_NEW_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    case SET_NEW_FIRSTNAME:
      return {
        ...state,
        firstname: action.value,
      };
    case SET_NEW_LASTNAME:
      return {
        ...state,
        lastname: action.value,
      };
    case SET_NEW_BIRTHDATE:
      return {
        ...state,
        birthDate: action.birthDate,
      };
    case SET_NEW_PHONE:
      return {
        ...state,
        phone: action.phone,
      };
    case SET_SAVE_FIRSTNAME:
      return {
        ...state,
        firstname: action.newFirstName,
      };
    case SET_SAVE_LASTNAME:
      return {
        ...state,
        firstname: action.newLastName,
      };
    default:
      return state;
  }
};

// Export
export default reducer;
