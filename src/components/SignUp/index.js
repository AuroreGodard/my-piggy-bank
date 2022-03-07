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
} from '../../actions/signUp';

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

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="Email"
              type="email"
              value={email}
              onChange={
                        (event) => {
                          dispatch(setNewEmail(event.target.value));
                        }
                    }
            />
          </div>

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="Mot de passe"
              type="password"
              value={password}
              onChange={
                        (event) => {
                          dispatch(setNewPassword(event.target.value));
                        }
                    }
            />
          </div>

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="Prénom"
              type="text"
              value={firstname}
              onChange={
                        (event) => {
                          dispatch(setNewFirstName(event.target.value));
                        }
                    }
            />
          </div>

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="Nom"
              type="text"
              value={lastname}
              onChange={
                    (event) => {
                      dispatch(setNewLastName(event.target.value));
                    }
          }
            />
          </div>

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="Date de naissance"
              type="date"
              value={birthDate}
              onChange={
                    (event) => {
                      dispatch(setNewBirthdate(event.target.value));
                    }
          }
            />
          </div>

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="Mobile"
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

export default SignUp;
