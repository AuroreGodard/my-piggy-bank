// import dependencies
import { useSelector, useDispatch } from 'react-redux';

// import Components
import HeaderMenu from 'src/components/HeaderMenu';

// import actions
import {
  setNewLastName,
  setNewFirstname,
  setNewAddress,
  setNewBirthdate,
  setNewCity,
  setNewZipCode,
  setNewCountry,
  setNewPhone,
  setNewIban,
  setNewBic,
  setNewUserName,
  setNewPassword,
  setNewEmail,
  login,
} from '../../actions';

const SignUp = () => {
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);
  const username = useSelector((state) => state.username);
  const birthDate = useSelector((state) => state.birthDate);
  const lastname = useSelector((state) => state.lastname);
  const firstname = useSelector((state) => state.firstname);
  const address = useSelector((state) => state.address);
  const city = useSelector((state) => state.city);
  const zipCode = useSelector((state) => state.zipCode);
  const country = useSelector((state) => state.country);
  const phone = useSelector((state) => state.phone);
  const iban = useSelector((state) => state.iban);
  const bic = useSelector((state) => state.bic);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    // on empêche le rechargement de ma page
    event.preventDefault();
    dispatch(login());
  };

  return (
    <>
      <HeaderMenu />
      <div className="h-screen flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[500px] flex flex-col justify-center items-center gap-2">

          <div className="inline-flex justify-center rounded-md items-center w-full text-center text-white h-12 bg-slate-500 uppercase mt-6 ">Inscription</div>

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
              placeholder="Nom d'utilisateur"
              type="text"
              value={username}
              onChange={
                        (event) => {
                          dispatch(setNewUserName(event.target.value));
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
                          dispatch(setNewFirstname(event.target.value));
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
              placeholder="Adresse"
              type="text"
              value={address}
              onChange={
                    (event) => {
                      dispatch(setNewAddress(event.target.value));
                    }
          }
            />
          </div>

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="Ville"
              type="text"
              value={city}
              onChange={
                    (event) => {
                      dispatch(setNewCity(event.target.value));
                    }
          }
            />
          </div>

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="Code postal"
              type="number"
              value={zipCode}
              onChange={
                    (event) => {
                      dispatch(setNewZipCode(event.target.value));
                    }
          }
            />
          </div>

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="Pays"
              type="text"
              value={country}
              onChange={
                    (event) => {
                      dispatch(setNewCountry(event.target.value));
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

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="IBAN"
              type="text"
              value={iban}
              onChange={
                    (event) => {
                      dispatch(setNewIban(event.target.value));
                    }
          }
            />
          </div>

          <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
            <input
              className="w-4/5 flex align-middle justify-center p-2 rounded-md"
              placeholder="BIC"
              type="text"
              value={bic}
              onChange={
                    (event) => {
                      dispatch(setNewBic(event.target.value));
                    }
          }
            />
          </div>

          <input
            className="cursor-pointer inline-flex justify-center rounded-md items-center w-full text-center text-slate- h-12 bg-green-200 uppercase mt-2 hover:bg-green-300"
            type="submit"
            value="Valider"
          />

        </form>
      </div>
    </>
  );
};

export default SignUp;
