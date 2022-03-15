// import
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import { useNavigate } from 'react-router';

// import actions
import {
  setPotName,
  setPotGoal,
  setPotDateGoal,
  addPot,
}
  from '../../actions/pots';

// Component
function AddPot() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // calls from selectorssp
  const name = useSelector((state) => state.pots.name);
  const amountGoal = useSelector((state) => state.pots.amountGoal);
  const dateGoal = useSelector((state) => state.pots.dateGoal);

  const handleSubmit = (event) => {
    // prevent the reloading of my page
    event.preventDefault();
    dispatch(addPot());
    if (name.value) {
      navigate('/dashboard');
    }
  };

  return (
    <main className="flex ml-2 mx-2 gap-8
      md:mx-8 md:ml-8
      xl:ml-24 xl:mx-16
      lg:ml-24 lg:h-[calc(100vh_-_7em)] flex justify-between flex-col ml-2 mx-2"
    >

      <div>
        <div className="text-[1.5em] mb-8">
          <h3 className="w-fit underline-addpot-title uppercase text-[1.5em]">
            Créer ma cagnotte
          </h3>
        </div>
        {/* FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex gap-8
          md:w-[500px]
          "
        >
          <div className="flex flex-col gap-3">
            <div>
              <label
                htmlFor="potname"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Nom de ma cagnotte

              </label>
              <input
                value={name}
                onChange={
                          (event) => {
                            dispatch(setPotName(event.target.value));
                          }
                      }
                type="text"
                name="potname"
                className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5"
                placeholder="Anniversaire"

              />
            </div>
            <div>
              <label htmlFor="goalamount" className="text-sm font-medium text-gray-900 block mb-2">Objectif de somme</label>
              <input
                value={amountGoal}
                onChange={
                          (event) => {
                            dispatch(setPotGoal(parseInt(event.target.value, 10)));
                          }
                      }
                type="number"
                name="goalamount"
                className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5"
                placeholder="1.000 €"
              />
            </div>
            <div>
              <label htmlFor="dateGoal" className="text-sm font-medium text-gray-900 block mb-2">Objectif de date</label>
              <input
                value={dateGoal}
                onChange={
                        (event) => {
                          dispatch(setPotDateGoal(event.target.value));
                        }
                    }
                type="date"
                name="goaldate"
                className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5"

              />
            </div>

            <div className="flex flex-col gap-3">
              <p className=" text-sm font-medium text-gray-900 block mb-2">Mode de déblocage</p>

              <div>
                <input className="mr-2" type="radio" id="souple" name="mode" value="30" checked />
                <label htmlFor="souple">Souple</label>
              </div>

              <div>
                <input className="mr-2" type="radio" id="mixte" name="mode" value="60" />
                <label htmlFor="mixte">Mixte</label>
              </div>

              <div>
                <input className="mr-2" type="radio" id="stricte" name="mode" value="100" />
                <label htmlFor="stricte">Stricte</label>
              </div>

            </div>

            <input type="submit" className="hover-anim mt-4 bg-[#FFD9E0] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2 cursor-pointer" value="Je crée ma cagnotte !" />
          </div>
          {/* ICONS LIST */}
          <div>
            <label htmlFor="avatar" className="text-sm font-medium text-gray-900 block mb-2">Icône de la cagnotte</label>
            <div className="grid grid-cols-4 gap-2">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" className="bi bi-piggy-bank" viewBox="0 0 16 16">
                  <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z" />
                  <path fillRule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z" />
                </svg>
              </div>
            </div>
          </div>
          {/* END ICONS LIST */}
        </form>
        {/* END FORM SECTION */}
      </div>

      <div className="flex flex-col gap-3 mb-16
      md:mb-24
      xl:mb-0"
      >
        <h3 className="w-fit underline-userprofile-informations uppercase text-[1.em] mb-4 lg:mb-8">
          Nos modes de déblocages :
        </h3>
        <p className="italic"> Souple : Aucune contrainte de retrait</p>
        <p className="italic"> Mixte : Un seul retrait possible, ne dépassant pas 50% de la cagnotte</p>
        <p className="italic"> Stricte : Retrait uniquement possible lorsque l'objectif est atteint</p>
      </div>

    </main>

  );
}

// == Export
export default AddPot;
