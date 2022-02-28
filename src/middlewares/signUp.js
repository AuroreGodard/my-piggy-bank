import axios from 'axios';
import { SIGN_UP } from 'src/actions/signUp';

const signUpMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
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

      axios.post('http://tristan-bonnal.vpnuser.lan:8000/api/signup', {
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

export default signUpMiddleWare;
