import axios from 'axios';
import { LOGIN } from 'src/actions/login';

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case LOGIN: {
      const { login: { username, password } } = store.getState();

      axios.post('http://tristan-bonnal.vpnuser.lan:8000/api/login_check', {
        username,
        password,
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
