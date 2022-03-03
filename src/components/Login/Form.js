import { useDispatch, useSelector } from 'react-redux';

// import actions
import {
  setNewUserName,
  setNewPassword,
} from '../../actions/login';

function Form(handleSubmit) {
  const dispatch = useDispatch();

  const username = useSelector((state) => state.login.username);
  const password = useSelector((state) => state.login.password);

  return (
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
          react
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
  );
}

export default Form;
