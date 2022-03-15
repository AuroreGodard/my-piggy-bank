// import dependencies
import { useSelector, useDispatch } from 'react-redux';

// import Components
import HeaderMenu from 'src/components/HeaderMenu';

// import Styles
import './style.scss';

// import actions
import {
  setNewLastName,
  setNewFirstName,
  setNewBirthdate,
  setNewPhone,
  setNewPassword,
  setNewEmail,
  signUp,
  clearFields,
} from '../../actions/signUp';

// Component
function SignUp() {
  const email = useSelector((state) => state.signUp.email);
  const password = useSelector((state) => state.signUp.password);
  const birthDate = useSelector((state) => state.signUp.birthDate);
  const lastname = useSelector((state) => state.signUp.lastname);
  const firstname = useSelector((state) => state.signUp.firstname);
  const phone = useSelector((state) => state.signUp.phone);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    // on empêche le rechargement de ma page
    event.preventDefault();
    dispatch(signUp());
    dispatch(clearFields());
  };

  return (
    <>
      <HeaderMenu />
      <div className="h-full pb-8 flex flex-col justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="w-full px-4 flex flex-col justify-center items-start gap-2
        md:w-[500px]"
        >

          <h3 className="w-fit underline-signup-title uppercase text-[1.5em] my-6
          "
          >
            Créer mon compte
          </h3>

          <div className="w-full">
            <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 ">Votre email</label>
            <input
              type="email"
              name="email"
              className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 "
              placeholder="lucien.dupont@gmail.com"
              type="email"
              value={email}
              onChange={
                        (event) => {
                          dispatch(setNewEmail(event.target.value));
                        }
                    }
            />
          </div>

          <div className="w-full">
            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 ">Votre mot de passe</label>
            <input
              type="password"
              name="password"
              className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 "
              placeholder="****"
              minLength="4"
              value={password}
              onChange={
                        (event) => {
                          dispatch(setNewPassword(event.target.value));
                        }
                    }
            />
          </div>

          <div className="w-full">
            <label htmlFor="prenom" className="text-sm font-medium text-gray-900 block mb-2 ">Votre prénom</label>
            <input
              type="prenom"
              name="prenom"
              className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 "
              placeholder="Lucien"
              type="text"
              minLength="2"
              value={firstname}
              onChange={
                        (event) => {
                          dispatch(setNewFirstName(event.target.value));
                        }
                    }
            />
          </div>

          <div className="w-full">
            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 ">Votre nom</label>
            <input
              type="nom"
              name="nom"
              className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 "
              placeholder="Dupont"
              type="text"
              minLength="2"
              value={lastname}
              onChange={
                    (event) => {
                      dispatch(setNewLastName(event.target.value));
                    }
          }
            />
          </div>

          <div className="w-full">
            <label htmlFor="date" className="text-sm font-medium text-gray-900 block mb-2 ">Votre date de naissance</label>
            <input
              type="date"
              name="date"
              className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 "
              placeholder="Date de naissance"
              type="date"
              required
              value={birthDate}
              onChange={
                    (event) => {
                      dispatch(setNewBirthdate(event.target.value));
                    }
          }
            />
          </div>

          <div className="w-full">
            <label htmlFor="numero" className="text-sm font-medium text-gray-900 block mb-2 ">Votre numéro de téléphone</label>
            <input
              type="numero"
              name="numero"
              className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 "
              placeholder="0601020304"
              type="text"
              value={phone}
              onChange={
                    (event) => {
                      dispatch(setNewPhone(event.target.value));
                    }
          }
            />
          </div>
          <input
            className="cursor-pointer inline-flex justify-center rounded-md items-center w-full text-center text-slate- h-12 bg-[#FFD9E0] uppercase mt-2 hover:bg-green-300"
            type="submit"
            value="Valider"
          />

        </form>
      </div>
    </>
  );
}

// Export
export default SignUp;
