// Import
import Swal from 'sweetalert2';
import './style.scss';

import {
  LOGIN, saveToken, LOGOUT, saveUserApi,
} from '../actions/login';
import {
  pots,
} from '../actions/pots';

import { axiosInstance } from '../components/App';

// APImiddleWare
const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    // for LOGIN
    case LOGIN: {
      const { login: { username, password } } = store.getState();

      axiosInstance.post('/login_check', {
        username,
        password,
      })
        .then((response) => {
          store.dispatch(saveToken(response.data.token));

          Swal.fire({
            position: 'bottom-left',
            icon: 'success',
            title: 'Vous êtes connecté.e !',
            showConfirmButton: false,
            timer: 2000,
            toast: true,
            timerProgressBar: true,
            showclass: {
              popup: 'swal2-show',
              backdrop: 'swal2-backdrop-show',
              icon: 'modal-login-success',
            },
          });

          // return the token of the instance
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

          // push token in localstorage
          localStorage.setItem('token', response.data.token);
          // then push token into state
          store.dispatch(saveUserApi(response.data.user));
          localStorage.setItem('user', JSON.stringify(response.data.user));
          console.log('ceci est ma reponse data.user', response.data.user);
          console.log('ceci est la lecture de mon localstorage user', localStorage.getItem('user'));
          console.log('ceci est ma reponse data.token', response.data.token);
        })
        .then(() => {
          store.dispatch(pots());
        })
        .catch((error) => {
          console.log('error', error);
          Swal.fire({
            position: 'bottom-left',
            icon: 'error',
            title: 'Impossible de se connecter',
            text: 'Votre identifiant ou mot de passe est incorrect',
            showConfirmButton: false,
            timer: 5000,
            toast: true,
            timerProgressBar: true,
            showclass: {
              popup: 'swal2-show',
              backdrop: 'swal2-backdrop-show',
              icon: 'modal-login-error',
            },
          });
        });

      next(action);
      break;
    }

    // for LOGOUT
    case LOGOUT:

      // remove the token from the instance
      axiosInstance.defaults.headers.common.Authorization = null;
      Swal.fire({
        position: 'bottom-left',
        icon: 'info',
        title: 'Vous êtes déconnecté.e !',
        showConfirmButton: false,
        timer: 2000,
        toast: true,
        timerProgressBar: true,
        showclass: {
          popup: 'swal2-show',
          backdrop: 'swal2-backdrop-show',
          icon: 'modal-login-info',
        },
      });
      next(action);
      break;
    default:
      next(action);
  }
};

// Export
export default apiMiddleWare;
