import {
  SET_NEW_ADDRESS,
  SET_NEW_BIC,
  SET_NEW_BIRTHDATE,
  SET_NEW_CITY,
  SET_NEW_COUNTRY,
  SET_NEW_EMAIL,
  SET_NEW_FIRSTNAME,
  SET_NEW_IBAN,
  SET_NEW_LASTNAME,
  SET_NEW_PASSWORD,
  SET_NEW_PHONE,
  SET_NEW_USERNAME,
  SET_NEW_ZIPCODE,
} from '../actions';

const initialState = {
  email: 'admin@admin.com',
  password: 'admin',
  username: 'admin@admin.com',
  firstname: 'user',
  lastname: 'bonjour',
  birthDate: '1991-07-15',
  address: '8 rue blabla',
  city: 'cap-ferret-martin',
  zipCode: 33510,
  country: 'France',
  phone: '6417637373',
  iban: 'fdsfdsfdsfdfssdfd',
  bic: 'unbic',
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
    case SET_NEW_USERNAME:
      return {
        ...state,
        username: action.username,
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
    case SET_NEW_ADDRESS:
      return {
        ...state,
        address: action.address,
      };
    case SET_NEW_CITY:
      return {
        ...state,
        city: action.city,
      };
    case SET_NEW_ZIPCODE:
      return {
        ...state,
        zipCode: action.zipCode,
      };
    case SET_NEW_COUNTRY:
      return {
        ...state,
        country: action.country,
      };
    case SET_NEW_PHONE:
      return {
        ...state,
        phone: action.phone,
      };
    case SET_NEW_IBAN:
      return {
        ...state,
        iban: action.iban,
      };
    case SET_NEW_BIC:
      return {
        ...state,
        bic: action.bic,
      };
    default:
      return state;
  }
};

export default reducer;
