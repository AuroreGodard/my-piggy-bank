// ACTION TYPE SET_SAVE_FIRSTNAME
export const SET_SAVE_FIRSTNAME = 'SET_SAVE_FIRSTNAME';

// ACTION CREATOR setSaveFirstName
export const setSaveFirstName = (value) => ({
  type: SET_SAVE_FIRSTNAME,
  value,
});
// ACTION TYPE SAVE_PROFILE
export const SAVE_PROFILE = 'SAVE_PROFILE';

// ACTION CREATOR saveProfile
export const saveProfile = () => ({
  type: SAVE_PROFILE,
});
