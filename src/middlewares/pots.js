// Import
import Swal from 'sweetalert2';
import {
  POTS, ADD_POT, listPotsApi, HISTORY, historyApi, ADD_AMOUNT, GET_POT_ID,
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
        )
        .catch(
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

    case GET_POT_ID: {
      const {
        pots: {
          id,
        },
      } = store.getState();
      axiosInstance
        .get(
          `/pots/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          console.log('mon resultat' + response.data);
        })
        .catch((error) => {
          console.log('error', error);
        });
      next(action);
      break;
    }

    case ADD_AMOUNT: {
      const {
        pots: {
          type, amountAdd, id,
        },
      } = store.getState();

      const amount = amountAdd;
      const pot = id;

      axiosInstance.post('/operations', {
        type,
        amount,
        pot,
      }, {
        headers: {
          Authorization: (`Bearer ${token}`),
        },
      })
        .then((response) => {
          console.log('onsubmitadd', response.data.amount);
          //setShowModalAdd(false);
          setAddFunds(response.data.amount);
          // window.location.reload(true);
          Swal.fire({
            position: 'bottom-left',
            icon: 'success',
            title: `Dépôt de ${amountAdd}€ réussi`,
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
        }).catch((error) => {
          console.error(error);
          Swal.fire({
            position: 'bottom-left',
            icon: 'error',
            title: "Une erreur s'est produite",
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
