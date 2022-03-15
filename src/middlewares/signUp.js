import Swal from 'sweetalert2';
// Import

import { SIGN_UP } from '../actions/signUp';
import { axiosInstance } from '../components/App';

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
          Swal.fire({
            position: 'bottom-left',
            icon: 'success',
            title: 'Inscription réussite',
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
        })
        .catch((error) => {
          console.log('error', error);
          Swal.fire({
            position: 'bottom-left',
            icon: 'error',
            title: 'Echec de l\'inscription',
            text: 'Veuillez vérifier vos informations',
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
    }
      next(action);
      break;

    default:
      next(action);
  }
};

// Export
export default signUpMiddleWare;
