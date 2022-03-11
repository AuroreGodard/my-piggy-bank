// Import
import {
  SET_SAVE_FIRSTNAME,
  SET_SAVE_LASTNAME,
  SET_SAVE_EMAIL,
  SET_SAVE_BIRTHDATE,
  SET_SAVE_PHONE,
} from '../actions/userProfile';

// initialState
const initialState = {
  saveEmail: '',
  saveFirstname: '',
  saveLastname: '',
  saveBirthDate: '',
  savePhone: '',
};

// UserProfile Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SAVE_FIRSTNAME:
      return {
        ...state,
        saveFirstname: action.value,
      };
    case SET_SAVE_LASTNAME:
      return {
        ...state,
        saveLastname: action.value,
      };
    case SET_SAVE_EMAIL:
      return {
        ...state,
        saveEmail: action.value,
      };
    case SET_SAVE_BIRTHDATE:
      return {
        ...state,
        saveBirthDate: action.value,
      };
    case SET_SAVE_PHONE:
      return {
        ...state,
        savePhone: action.value,
      };

    default:
      return state;
  }
};

// Export
export default reducer;
