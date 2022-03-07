import axios from 'axios';
import { POTS, savePotsApi } from '../actions/pots';

const axiosInstance = axios.create({
  baseURL: 'http://tristanbonnal-server.eddi.cloud/projet-13-my-piggy-bank-back/public/api',
});

const token = localStorage.getItem('token');

const potsMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case POTS: {
      axiosInstance
        .get(
          '/pots',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(
          (response) => {
            store.dispatch(savePotsApi(response.data));
            console.log('c est ma reponse ', response.data);
          },
        ).catch(
          () => console.log('error'),
        );
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default potsMiddleWare;
