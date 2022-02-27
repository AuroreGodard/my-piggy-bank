// import dependencies
import { useSelector, useDispatch } from 'react-redux';

// import Components
import HeaderMenu from 'src/components/HeaderMenu';

// import actions
import {
  setNewPassword,
  setNewEmail,
  login,
} from '../../actions';

const AuthModal = () => {
  const email = useSelector((state) => state.email);
  const password = useSelector((state) => state.password);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    // on empêche le rechargement de ma page
    event.preventDefault();
    dispatch(login());
  };

  return (
    <>
      <HeaderMenu />
      <div className="h-[calc(100vh_-_100px)] flex flex-col justify-center items-center">
        <form onSubmit={handleSubmit} className="w-[500px] flex flex-col justify-center items-center gap-2">

          <div className="inline-flex justify-center rounded-md items-center w-full text-center text-white h-12 bg-slate-500 uppercase mt-6 ">Connexion</div>

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

export default AuthModal;
