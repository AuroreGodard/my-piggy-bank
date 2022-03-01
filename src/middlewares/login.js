import axios from 'axios';
import { LOGIN, saveToken } from 'src/actions/login';

const axiosInstance = axios.create({
  baseURL: 'http://tristan-bonnal.vpnuser.lan:8000/api',
});

const useToken = localStorage.getItem('token');

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
    }
      console.log('hello');
      next(action);
      axiosInstance.get('/users')
        .then((response) => {
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

          localStorage.getItem('token');
        });
      break;
    default:
      next(action);
  }
};

export default apiMiddleWare;
