// Import
import axios from 'axios';
import {
  POTS, ADD_POT, listPotsApi, HISTORY, historyApi,
} from '../actions/pots';

import { axiosInstance } from '../components/App';

// POTSmiddleWare
const potsMiddleWare = (store) => (next) => (action) => {
  // read token in localstorage
  const token = localStorage.getItem('token');

  switch (action.type) {
    // for POTS
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

    // for ADD POTS
    case ADD_POT: {
      const {
        pots: {
          name, amountGoal, dateGoal,
        },
      } = store.getState();
      // read addpot form values and insert into DB with API call
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
    case HISTORY: {
      axiosInstance.get('/operations', {
        headers: {
          Authorization: (`Bearer ${token}`),
        },
      })
        .then((response) => {
          store.dispatch(historyApi(response.data));
          console.log(response.data);
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

// Export
export default potsMiddleWare;
