import {
  LIST_POTS_API, SET_POT_NAME, SET_POT_GOAL, SET_POT_DATE_GOAL,
} from '../actions/pots';

const initialState = {
  pots: [],
  name: 'Luc',
  amountGoal: '1000',
  dateGoal: '',
};

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
    default:
      return state;
  }
};

export default reducer;
