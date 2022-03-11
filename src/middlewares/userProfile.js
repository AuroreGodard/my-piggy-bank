// Import
import { SAVE_PROFILE } from '../actions/userProfile';
import { axiosInstance } from '../components/App';

// USERPROFILEmiddleWare
const userProfileMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case SAVE_PROFILE: {
      const {
        userProfile: {
          saveFirstname,
        },
      } = store.getState();
      // read addpot form values and insert into DB with API call
      axiosInstance.patch('/userprofile', {
        saveFirstname,
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

// Export
export default userProfileMiddleWare;
