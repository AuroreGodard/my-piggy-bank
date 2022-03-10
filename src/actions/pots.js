// ACTION TYPE POTS
export const POTS = 'POTS';

// ACTION CREATOR login
export const pots = () => ({
  type: POTS,
});

// ACTION TYPE ADD_POT
export const ADD_POT = 'ADD_POT';

// ACTION CREATOR ADD_POT
export const addPot = () => ({
  type: ADD_POT,
});

// ACTION TYPE listPotsApi
export const LIST_POTS_API = 'LIST_POTS_API';

// ACTION CREATOR listPotsApi
export const listPotsApi = (potsApi) => ({
  type: LIST_POTS_API,
  potsApi,
});

// ACTION TYPE SET_POT_NAME
export const SET_POT_NAME = 'SET_POT_NAME';

// ACTION CREATOR SET_POT_NAME
export const setPotName = (name) => ({
  type: SET_POT_NAME,
  name,
});

// ACTION TYPE SET_POT_GOAL
export const SET_POT_GOAL = 'SET_POT_GOAL';

// ACTION CREATOR SET_POT_GOAL
export const setPotGoal = (PotGoal) => ({
  type: SET_POT_GOAL,
  PotGoal,
});

// ACTION TYPE SET_POT_DATE_GOAL
export const SET_POT_DATE_GOAL = 'SET_POT_DATE_GOAL';

// ACTION CREATOR SET_POT_DATE_GOAL
export const setPotDateGoal = (PotDateGoal) => ({
  type: SET_POT_DATE_GOAL,
  PotDateGoal,
});

// ACTION TYPE SAVE_USER_FROM_LOCSAVE_POTS_FROM_LOCALSTORAGEALSTORAGE
export const SAVE_POTS_FROM_LOCALSTORAGE = 'SAVE_POTS_FROM_LOCALSTORAGE';

// ACTION CREATOR savePotsFromLocalStorage
export const savePotsFromLocalStorage = (potsUser) => ({
  type: SAVE_POTS_FROM_LOCALSTORAGE,
  potsUser,
});

// ACTION TYPE HISTORY
export const HISTORY = 'HISTORY';

// ACTION CREATOR login
export const history = () => ({
  type: HISTORY,
});

// ACTION TYPE HISTORY_API
export const HISTORY_API = 'HISTORY_API';

// ACTION CREATOR historyApi
export const historyApi = (historys) => ({
  type: HISTORY_API,
  historys,
});

// ACTION TYPE SET_AMOUNT_ADD
export const SET_AMOUNT_ADD = 'SET_AMOUNT_ADD';

// ACTION CREATOR setAmountAdd
export const setAmountAdd = (amountAdd) => ({
  type: SET_AMOUNT_ADD,
  amountAdd,
});

// ACTION TYPE SET_AMOUNT_WITHDRAW
export const SET_AMOUNT_WITHDRAW = 'SET_AMOUNT_WITHDRAW';

// ACTION CREATOR setAmountWithdraw
export const setAmountWithdraw = (amountWithdraw) => ({
  type: SET_AMOUNT_WITHDRAW,
  amountWithdraw,
});
