// ACTION TYPE SET_NEW_LASTNAME
export const SET_NEW_LASTNAME = 'SET_NEW_LASTNAME';

// ACTION CREATOR setNewLastName
export const setNewLastName = (value) => ({
  type: SET_NEW_LASTNAME,
  value,
});

// ACTION TYPE SET_NEW_FIRSTNAME
export const SET_NEW_FIRSTNAME = 'SET_NEW_FIRSTNAME';

// ACTION CREATOR setNewFirstname
export const setNewFirstname = (value) => ({
  type: SET_NEW_FIRSTNAME,
  value,
});
