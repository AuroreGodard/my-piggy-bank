import { SET_NEW_FIRSTNAME, SET_NEW_LASTNAME } from '../actions';

const initialState = {
  lastname: 'Dupont',
  firstname: 'Lucien',
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
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
    default:
      return state;
  }
};

export default reducer;
