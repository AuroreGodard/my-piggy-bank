// Import
import {
  LIST_POTS_API,
  SET_POT_NAME,
  SET_POT_GOAL,
  SET_POT_DATE_GOAL,
  SAVE_POTS_FROM_LOCALSTORAGE,
  HISTORY_API,
  SET_AMOUNT_ADD,
  SET_AMOUNT_WITHDRAW,
} from '../actions/pots';

// initialState
const initialState = {
  pots: [],
  potsLs: '',
  name: '',
  amountGoal: null,
  dateGoal: null,
  history: [],
  // for add and withddraw button
  amountAdd: '',
  amountWithdraw: '',
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
    case HISTORY_API:
      return {
        ...state,
        history: action.historys,
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
    case SET_AMOUNT_ADD:
      return {
        ...state,
        amountAdd: action.amountAdd,
      };
    case SET_AMOUNT_WITHDRAW:
      return {
        ...state,
        amountWithdraw: action.amountWithdraw,
      };
    default:
      return state;
  }
};

// Export
export default reducer;
