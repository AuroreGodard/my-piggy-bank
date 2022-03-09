import axios from 'axios';
import {
  POTS, ADD_POT, listPotsApi,
} from '../actions/pots';

const axiosInstance = axios.create({
  baseURL: 'http://tristanbonnal-server.eddi.cloud/projet-13-my-piggy-bank-back/public/api',
});

const potsMiddleWare = (store) => (next) => (action) => {
  const token = localStorage.getItem('token');
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
            store.dispatch(listPotsApi(response.data));
            console.log('ce sont mes cagnottes ', response.data);
            localStorage.setItem('pots', JSON.stringify(response.data));
            console.log('ce sont mes cagnottes du ls ', localStorage.getItem('pots'));
          },
        ).catch(
          () => console.log('error'),
        );
      next(action);
      break;
    }
    case ADD_POT: {
      const {
        pots: {
          name, amountGoal, dateGoal,
        },
      } = store.getState();

      axiosInstance.post('/pots', {
        name,
        amountGoal,
        dateGoal,
      }, {
        headers: {
          Authorization: (`Bearer ${token}`),
        },
      })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log('error', error);
        });
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default potsMiddleWare;
