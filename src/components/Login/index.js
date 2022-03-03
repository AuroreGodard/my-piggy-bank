// import dependencies
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// import Components
import HeaderMenu from 'src/components/HeaderMenu';

// import styles
import './style.scss';

// import actions
import {
  setNewUserName,
  setNewPassword,
  login,
  fetchUsers,
  logout,
} from '../../actions/login';

const Login = () => {
  const username = useSelector((state) => state.login.username);
  console.log(username);
  const password = useSelector((state) => state.login.password);

  // is user logged or not ?
  const logged = useSelector((state) => state.login.logged);

  const navigate = useNavigate();

  console.log(logged);

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    // on empêche le rechargement de ma page
    event.preventDefault();
    dispatch(login());
    navigate('/dashboard');
  };

  const handleLogout = () => {
    console.log('je veux me déconnecter');
    console.log(logged);
    dispatch(logout());
    localStorage.clear();
    // on se redirige vers la page d'accueil

    window.location.reload(true);
  };

  useEffect(() => {
    if (logged) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <>
      <HeaderMenu />

      <div className="h-[calc(100vh_-_100px)] flex flex-col justify-start items-center">
        {!logged
           && (
           <form
             onSubmit={handleSubmit}
             className="w-full px-4 flex flex-col justify-center items-start gap-2
        md:w-[500px]"
           >

             <h3 className="w-fit underline-login-title uppercase text-[1.5em] my-6
          "
             >
               Me connecter
             </h3>

             <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
               <input
                 className="w-4/5 flex align-middle justify-center p-2 rounded-md"
                 placeholder="Email"
                 type="email"
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
               className="cursor-pointer inline-flex justify-center rounded-md items-center w-full text-center text-slate- h-12 bg-[#C9DECE] uppercase mt-2 hover:bg-green-300"
               type="submit"
               value="Valider"
             />

           </form>
           )}
      </div>
    </>
  );
};

export default Login;
