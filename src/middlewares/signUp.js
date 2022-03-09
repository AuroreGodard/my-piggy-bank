// Import
import axios from 'axios';
import { SIGN_UP } from '../actions/signUp';

// instance of axios for baseURL
const axiosInstance = axios.create({
  baseURL: 'http://tristanbonnal-server.eddi.cloud/projet-13-my-piggy-bank-back/public/api',
});

// SIGNUPmiddleWare
const signUpMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    // for SIGNUP
    case SIGN_UP: {
      const {
        signUp: {
          email,
          password,
          firstname,
          lastname,
          birthDate,
          phone,
        },
      } = store.getState();

      axiosInstance.post('/signup', {
        email,
        password,
        firstname,
        lastname,
        birthDate,
        phone,
      })
        .then((response) => {
          console.log('success', response);
        })
        .catch((error) => {
          console.log('error', error);
        });
    }
      next(action);
      break;
    default:
      next(action);
  }
};

// Export
export default signUpMiddleWare;
