// import
import { LOGIN } from 'src/actions';
import { SIGNUP } from 'src/actions';
import axios from 'axios';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case SIGNUP: {
      const {
        email,
        password,
        username,
        firstname,
        lastname,
        birthDate,
        address,
        city,
        zipCode,
        country,
        phone,
        iban,
        bic,

      } = store.getState();
      axios.post('http://martin-ferret.vpnuser.lan:8080/api/signup', {
        email,
        password,
        username,
        firstname,
        lastname,
        birthDate,
        address,
        city,
        zipCode,
        country,
        phone,
        iban,
        bic,
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
