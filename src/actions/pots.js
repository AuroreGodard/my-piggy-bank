// ACTION TYPE POTS
export const POTS = 'POTS';

// ACTION CREATOR login
export const pots = () => ({
  type: POTS,
});

// ACTION TYPE SAVE_USERS_API
export const SAVE_POTS_API = 'SAVE_POTS_API';

// ACTION CREATOR saveFavorites
export const savePotsApi = (potsApi) => ({
  type: SAVE_POTS_API,
  potsApi,
});
