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
  SET_SHOW_MODAL_ADD_TRUE,
  SET_SHOW_MODAL_ADD_FALSE,
  SET_SHOW_MODAL_WITHDRAW_FALSE,
  SET_SHOW_MODAL_WITHDRAW_TRUE,
  GET_ID_FROM_POT_DETAIL,
  SAVE_POT_DATAS,

} from '../actions/pots';

// initialState
const initialState = {
  pots: [],
  potsLs: '',
  name: 'Luc',
  amountGoal: '',
  dateGoal: '',
  history: [],
  // for add and withddraw button
  amountAdd: '',
  type: false,
  id: 0,
  amountWithdraw: '',
  showModalAdd: false,
  showModalWithdraw: false,
  potDatas: [],
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
    case SET_SHOW_MODAL_ADD_TRUE:
      return {
        ...state,
        showModalAdd: true,
      };
    case SET_SHOW_MODAL_ADD_FALSE:
      return {
        ...state,
        showModalAdd: false,
      };
    case SET_SHOW_MODAL_WITHDRAW_FALSE:
      return {
        ...state,
        showModalWithdraw: false,
      };
    case SET_SHOW_MODAL_WITHDRAW_TRUE:
      return {
        ...state,
        showModalWithdraw: true,
      };
    case GET_ID_FROM_POT_DETAIL:
      return {
        ...state,
        id: action.id,
      };
    case SAVE_POT_DATAS:
      return {
        ...state,
        potDatas: action.datas,
      };
    default:
      return state;
  }
};

// Export
export default reducer;
