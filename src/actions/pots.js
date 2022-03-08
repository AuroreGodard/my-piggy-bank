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
