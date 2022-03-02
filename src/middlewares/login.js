import axios from 'axios';
import { LOGIN, saveToken, LOGOUT } from 'src/actions/login';
import { FETCH_USERS, saveUserApi } from '../actions/login';

const axiosInstance = axios.create({
  baseURL: 'http://tristan-bonnal.vpnuser.lan:8000/api',
});

const token = localStorage.getItem('token');

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
          console.log(response.data);
          console.log('success', response);
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
          localStorage.setItem('token', response.data.token);
        })

        .catch((error) => {
          console.log('error', error);
        });
      next(action);
      break;
    }
    case FETCH_USERS: {
      axiosInstance
        .get(
          '/users',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(
          (response) => {
            store.dispatch(saveUserApi(response));
            console.log(response.data);
          },
        ).catch(
          () => console.log('error'),
        );
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
