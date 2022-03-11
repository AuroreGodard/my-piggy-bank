// ACTION TYPE SIGN_UP
export const SIGN_UP = 'SIGN_UP';

// ACTION CREATOR signup
export const signUp = () => ({
  type: SIGN_UP,
});

// ACTION TYPE SET_NEW_EMAIL
export const SET_NEW_EMAIL = 'SET_NEW_EMAIL';

// ACTION CREATOR setNewEmail
export const setNewEmail = (email) => ({
  type: SET_NEW_EMAIL,
  email,
});

// ACTION TYPE SET_NEW_PASSWORD
export const SET_NEW_PASSWORD = 'SET_NEW_PASSWORD';

// ACTION TYPE setNewPassword
export const setNewPassword = (password) => ({
  type: SET_NEW_PASSWORD,
  password,
});

// ACTION TYPE SET_NEW_FIRSTNAME
export const SET_NEW_FIRSTNAME = 'SET_NEW_FIRSTNAME';

// ACTION CREATOR setNewFirstName
export const setNewFirstName = (value) => ({
  type: SET_NEW_FIRSTNAME,
  value,
});

// ACTION TYPE SET_NEW_LASTNAME
export const SET_NEW_LASTNAME = 'SET_NEW_LASTNAME';

// ACTION CREATOR setNewLastName
export const setNewLastName = (value) => ({
  type: SET_NEW_LASTNAME,
  value,
});

// ACTION TYPE SET_NEW_BIRTH_DATE
export const SET_NEW_BIRTHDATE = 'SET_NEW_BIRTHDATE';

// ACTION CREATOR setNewBirthdate
export const setNewBirthdate = (birthDate) => ({
  type: SET_NEW_BIRTHDATE,
  birthDate,
});

// ACTION TYPE SET_NEW_PHONE
export const SET_NEW_PHONE = 'SET_NEW_PHONE';

// ACTION CREATOR setNewPhone
export const setNewPhone = (phone) => ({
  type: SET_NEW_PHONE,
  phone,
});

// ACTION TYPE SET_SAVE_FIRSTNAME
export const SET_SAVE_FIRSTNAME = 'SET_SAVE_FIRSTNAME';

// ACTION CREATOR setSaveFirstName
export const setSaveFirstName = (newFirstName) => ({
  type: SET_SAVE_FIRSTNAME,
  newFirstName,
});

// ACTION TYPE SET_SAVE_LASTNAME
export const SET_SAVE_LASTNAME = 'SET_SAVE_LASTNAME';

// ACTION CREATOR setSaveLastName
export const setSaveLastName = (saveFirstName) => ({
  type: SET_SAVE_LASTNAME,
  saveFirstName,
});
