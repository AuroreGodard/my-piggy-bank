// Import
import axios from 'axios';
import {
  POTS, ADD_POT, listPotsApi,
} from '../actions/pots';

// instance of axios for baseURL
const axiosInstance = axios.create({
  baseURL: 'http://tristanbonnal-server.eddi.cloud/projet-13-my-piggy-bank-back/public/api',
});

// POTSmiddleWare
const potsMiddleWare = (store) => (next) => (action) => {
  // read token in localstorage ???
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
            // console.log('c est ma reponse ', response.data);
          },
        ).catch(
          () => console.log('error'),
        );
      next(action);
      break;
    }
    // for ADD POTS
    case ADD_POT:
      // read addpot form values and insert into DB with API call
      axiosInstance
        .post(
          '/pots',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then(
          console.log(token, 'token addPot'),

        )
        .catch(
          () => console.log('error'),
        );
      next(action);
      break;
    default:
      next(action);
  }
};

// Export
export default potsMiddleWare;
