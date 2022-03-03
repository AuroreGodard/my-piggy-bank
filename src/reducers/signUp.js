import {
  SET_NEW_BIRTHDATE,
  SET_NEW_EMAIL,
  SET_NEW_FIRSTNAME,
  SET_NEW_LASTNAME,
  SET_NEW_PASSWORD,
  SET_NEW_PHONE,
} from '../actions/signUp';

/* const initialState = {
  email: 'admin@admin.com',
  password: 'admin',
  firstname: 'user',
  lastname: 'bonjour',
  birthDate: '1991-07-15',
  phone: '6417637373',
}; */

const initialState = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  birthDate: '',
  phone: '',
};

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
    default:
      return state;
  }
};

export default reducer;
