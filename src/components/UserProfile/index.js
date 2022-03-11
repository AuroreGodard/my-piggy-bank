import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { NavLink } from 'react-router-dom';
import {
  setSaveFirstName,
  setSaveLastName,
  setSaveEmail,
  setSaveBirthDate,
  setSavePhone,
  saveProfile,
} from '../../actions/userProfile';

// Component
function UserProfile() {
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.login.user.firstname);
  const lastname = useSelector((state) => state.login.user.lastname);
  const email = useSelector((state) => state.login.user.email);
  const birthDate = useSelector((state) => state.login.user.birthDate.date);
  const phone = useSelector((state) => state.login.user.phone);

  console.log(firstname);
  const saveFirstname = useSelector((state) => state.userProfile.saveFirstname);
  const saveLastname = useSelector((state) => state.userProfile.saveLastname);
  const saveEmail = useSelector((state) => state.userProfile.saveEmail);
  const saveBirthDate = useSelector((state) => state.userProfile.saveBirthDate);
  const savePhone = useSelector((state) => state.userProfile.savePhone);

  const handleSubmit = (event) => {
    // prevent the reloading of my page
    event.preventDefault();
    dispatch(saveProfile());
  };

  return (
    <main className="h-full ml-2 mx-2 mb-16
      flex flex-col gap-8
      xl:ml-24 xl:mx-16
      lg:ml-24 lg:mb-8"
    >

      {/* WELCOME TITLE */}
      <section className="uppercase text-[1.5em]  flex items-start
        lg:mb-4
            "
      >
        <div className="flex items-center">
          <h3 className="underline-userprofile-title uppercase text-[1.5em]
              "
          >
            Hello
            {' '}

          </h3>
          <span className="uppercase text-[1.5em] username-welcome-msg">
            {firstname}
            ,
          </span>

        </div>
      </section>
      {/* END WELCOME TITLE */}

      {/* FORM SECTION */}
      <form
        className="w-full flex flex-col gap-2
        md:w-[500px]
        "
        onSubmit={handleSubmit}
      >

        <h3 className="w-fit underline-userprofile-informations uppercase text-[1.4em] mb-4
          lg:mb-8
          "
        >
          Vos informations personnelles
        </h3>
        <div>
          <label htmlFor="firstname" className="text-sm font-medium text-gray-900 block mb-2 ">Votre prénom</label>
          <input
            type="text"
            name="firstname"
            className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 "
            placeholder={firstname}
            value={saveFirstname}
            onChange={
            (event) => {
              dispatch(setSaveFirstName(event.target.value));
            }
        }
          />
        </div>

        <div>
          <label htmlFor="lastname" className="text-sm font-medium text-gray-900 block mb-2 ">Votre nom</label>
          <input
            type="text"
            name="lastname"
            className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 "
            placeholder={lastname}
            value={saveLastname}
            onChange={
            (event) => {
              dispatch(setSaveLastName(event.target.value));
            }
        }
          />
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 ">Votre email</label>
          <input
            type="email"
            name="email"
            className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 "
            placeholder={email}
            value={saveEmail}
            onChange={
            (event) => {
              dispatch(setSaveEmail(event.target.value));
            }
        }
          />
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-gray-900 block mb-2 ">Votre téléphone</label>
          <input
            type="text"
            name="phone"
            className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 d"
            placeholder={phone}
            value={savePhone}
            onChange={
          (event) => {
            dispatch(setSavePhone(event.target.value));
          }
      }
          />
        </div>

        <div>
          <label htmlFor="birthdate" className="text-sm font-medium text-gray-900 block mb-2">Votre date de naissance</label>
          <input
            type="date"
            name="birthdate"
            placeholder={birthDate}
            className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 "
            value={saveBirthDate}
            onChange={
          (event) => {
            dispatch(setSaveBirthDate(event.target.value));
          }
      }
          />
        </div>

        <input
          className="mt-4 bg-[#FFD9E0] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2"
          type="submit"
          value="Modifier mes informations"
        />

      </form>
      {/* END FORM SECTION */}

    </main>

  );
}

// Export
export default UserProfile;
