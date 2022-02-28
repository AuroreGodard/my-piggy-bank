// import

import { LOGIN } from 'src/actions';
import { SIGN_UP } from 'src/actions';
import axios from 'axios';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGN_UP: {
      const {
        email,
        password,
        firstname,
        lastname,
        birthDate,
        phone,
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

  switch (action.type) {
    case LOGIN: {
      const {
        password,
        username,
      } = store.getState();
      axios.post('http://tristan-bonnal.vpnuser.lan:8000/api/signup', {
        password,
        username,
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

export default apiMiddleWare;
