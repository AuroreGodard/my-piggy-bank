// import
import { useSelector, useDispatch } from 'react-redux';
import HeaderMenu from '../HeaderMenu';
import Sidebar from '../Sidebar';
import BottomMenu from '../BottomMenu';

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

  // calls from selectorssp
  const name = useSelector((state) => state.pots.name);
  const amountGoal = useSelector((state) => state.pots.amountGoal);
  const dateGoal = useSelector((state) => state.pots.dateGoal);

  const handleSubmit = (event) => {
    // prevent the reloading of my page
    event.preventDefault();
    dispatch(addPot());
  };

  return (
    <main className="ml-2 mx-2
      md:mx-8 md:ml-8
      xl:ml-24 xl:mx-16
      lg:ml-24"
    >

      <h3 className="w-fit underline-userprofile-informations uppercase text-[1.4em] mb-4 lg:mb-8">
        Créer ma cagnotte
      </h3>

      {/* FORM SECTION */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex gap-8
        md:w-[500px]
        "

        >

          <div className="flex flex-col gap-3">
            <div>
              <label htmlFor="potname" className="text-sm font-medium text-gray-900 block mb-2">Nom de ma cagnotte</label>
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
                required
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
                required
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
                required
              />
            </div>

            <input type="submit" className="mt-4 bg-[#FFD9E0] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2 cursor-pointer" value="Je crée ma cagnotte !" />
          </div>

          {/* ICONS LIST */}
          <div>
            <label htmlFor="avatar" className="text-sm font-medium text-gray-900 block mb-2">Choisir une icône</label>
            <div className="grid grid-cols-4 gap-2">
              <div className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" fill="currentColor" className="bi bi-piggy-bank-fill" viewBox="0 0 16 16">
                  <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>


            </div>

          </div>
        </div>
        {/* END ICONS LIST */}

      </form>
      {/* END FORM SECTION */}

    </main>
  );
}

// == Export
export default AddPot;
