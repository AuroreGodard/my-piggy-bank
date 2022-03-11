// Import
import {
  SET_SAVE_FIRSTNAME,
  SET_SAVE_LASTNAME,
} from '../actions/signUp';

// initialState
const initialState = {
  email: '',
  password: '',
  saveFirstname: 'Polo',
  lastname: '',
  birthDate: '',
  phone: '',
};

// UserProfile Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SAVE_FIRSTNAME:
      return {
        ...state,
        saveFirstname: action.value,
      };

    default:
      return state;
  }
};

// Export
export default reducer;
