// Import
import {
  LIST_POTS_API, SET_POT_NAME, SET_POT_GOAL, SET_POT_DATE_GOAL,SAVE_POTS_FROM_LOCALSTORAGE
} from '../actions/pots';

// initialState
const initialState = {
  pots: [],
  potsLs: '',
  name: 'Luc',
  amountGoal: 1000,
  dateGoal: '',
};

// Pots Reducer
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LIST_POTS_API:
      return {
        ...state,
        pots: action.potsApi,
        logged: true,
      };
    case SET_POT_NAME:
      return {
        ...state,
        name: action.name,
      };
    case SET_POT_GOAL:
      return {
        ...state,
        amountGoal: action.PotGoal,
      };
    case SET_POT_DATE_GOAL:
      return {
        ...state,
        dateGoal: action.PotDateGoal,
      };
    case SAVE_POTS_FROM_LOCALSTORAGE:
      return {
        ...state,
        pots: action.potsUser,
        logged: true,
      };
    default:
      return state;
  }
};

// Export
export default reducer;
