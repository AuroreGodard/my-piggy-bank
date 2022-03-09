import axios from 'axios';
import {
  LOGIN, saveToken, LOGOUT, saveUserApi,
} from '../actions/login';

import {
  pots,
} from '../actions/pots';

const axiosInstance = axios.create({
  baseURL: 'http://tristanbonnal-server.eddi.cloud/projet-13-my-piggy-bank-back/public/api',
});

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { login: { username, password } } = store.getState();

      axiosInstance.post('/login_check', {
        username,
        password,
      })
        .then((response) => {
          store.dispatch(saveToken(response.data.token));
          //* je return response.data.user
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          localStorage.setItem('token', response.data.token);
          store.dispatch(saveUserApi(response.data.user));

          // console.log(response.data.user, 'c est mon user');
          console.log(response.data.token, 'token login');
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          localStorage.setItem('token', response.data.token);
        })
        .then(() => {
          store.dispatch(pots());
          console.log('second then');
        })
        .catch((error) => {
          console.log('error', error);
        });
      next(action);
      break;
    }
    case LOGOUT:
      // au logout, on supprime le token de l'instance
      axiosInstance.defaults.headers.common.Authorization = null;
      next(action);
      break;
    default:
      next(action);
  }
};

export default apiMiddleWare;
