// Import
import { SAVE_PROFILE } from '../actions/userProfile';
import { axiosInstance } from '../components/App';

// USERPROFILEmiddleWare
const userProfileMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    // for SAVE PROFILE
    case SAVE_PROFILE: {
      const {
        userProfile: {
          SaveFirstName,
          SaveLastname,
          SaveEmail,
          SaveBirthDate,
          SavePhone,
        },
      } = store.getState();

      axiosInstance.patch(
        '/userprofile',
        {
          SaveFirstName,
          SaveLastname,
          SaveEmail,
          SaveBirthDate,
          SavePhone,
        },
        {
          headers: {
            Authorization: (`Bearer ${token}`),
          },
        },
      )
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
