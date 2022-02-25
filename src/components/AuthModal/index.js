// import dependencies
import { useSelector, useDispatch } from 'react-redux';
import { setNewLastName, setNewFirstname } from '../../actions';
// import styles

const AuthModal = () => {
  const lastname = useSelector((state) => state.lastname);
  const firstname = useSelector((state) => state.firstname);
  console.log(lastname);
  console.log(firstname);
  const dispatch = useDispatch();

  return (

    <div className="h-screen flex flex-col justify-center items-center">
      <form className="w-[500px] flex flex-col justify-center items-center gap-2">
        <button type="button" className="flex justify-center items-center rounded-full h-10 w-10 text-bg-slate-400 text-lg bg-slate-300 hover:bg-slate-400 p-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="inline-flex justify-center rounded-md items-center w-full text-center text-white h-12 bg-slate-500 uppercase mt-6 ">Inscription</div>
        <div className="w-full flex align-middle justify-center bg-gray-200 p-2 rounded-md">
          <input
            className="w-4/5 flex align-middle justify-center p-2 rounded-md"
            placeholder="Email"
            type="email"
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
            placeholder="Votre mot de passe"
            type="password"
            onChange={
                        (event) => {
                          dispatch(setNewFirstname(event.target.value));
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
      {/*       <span>J'ai déjà un compte</span>
 */}
    </div>
  );
};

export default AuthModal;

/* <TextField
        value={lastname}
        onChange={
                (event) => {
                  dispatch(setNewLastName(event.target.value));
                }
}
        id="outlined-basic"
        label="Nom"
        variant="outlined"
      />

      <TextField
        value={firstname}
        onChange={
                    (event) => {
                      dispatch(setNewFirstname(event.target.value));
                    }
                }
        id="outlined-basic"
        label="Prénom"
        variant="outlined"
      />

      <Button variant="contained">Valider</Button> */
