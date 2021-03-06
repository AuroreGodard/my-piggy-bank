// Import
import { useDispatch, useSelector } from 'react-redux';

// import components
import HeaderMenu from '../HeaderMenu';
import Sidebar from '../Sidebar';
import BottomMenu from '../BottomMenu';

// Component
function CardDetailActivityHistory() {
  return (
    <div className="flex flex-col gap-4">

      {/* ACTIONS TABLE */}
      <section>

        {/* WELCOME TITLE */}
        <section className="w-full uppercase text-[1.5em] mb-4 flex
            "
        >
          <h3 className="w-fit underline-step-title uppercase text-[1.5em]
          "
          >
            Vos dernières actions
          </h3>
        </section>
        {/* END WELCOME TITLE */}
        <div className="flex flex-col mt-6">
          <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div
              className="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
            >
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th
                      className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Utilisateur

                    </th>

                    <th
                      className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Titre de la cagnotte

                    </th>
                    <th
                      className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Action

                    </th>
                    <th
                      className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Montant

                    </th>

                  </tr>
                </thead>

                <tbody className="bg-white">
                  <tr className="hover:bg-slate-50 shadow-sm">
                    <td className="px-6 py-4 whitespace-no-wrap ">
                      <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                        <div className="text-sm leading-5 text-gray-900">John Doe</div>
                      </div>

                    </td>

                    <td className="h-full px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-start ">
                      <div className="text-sm leading-5 text-gray-900">Voyage</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <span
                        className="px-2 inline-flex text-xs leading-5 rounded-full bg-[#C9DECE]"
                      >
                        Dépôt

                      </span>
                    </td>

                    <td
                      className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                    >
                      + 1.000 €

                    </td>

                  </tr>
                  {/* fin de première ligne */}

                  <tr className="hover:bg-slate-50">
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                        </svg>
                        <div className="text-sm leading-5 text-gray-900">John Doe</div>
                      </div>

                    </td>

                    <td className="h-full px-6 py-4 whitespace-no-wrap border-b border-gray-200 flex items-start ">
                      <div className="text-sm leading-5 text-gray-900">Voyage</div>
                    </td>

                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <span
                        className="px-2 inline-flex text-xs leading-5 rounded-full bg-[#FFD9E0] "
                      >
                        Retrait

                      </span>
                    </td>

                    <td
                      className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                    >
                      - 1.000 €

                    </td>

                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* END ACTIONS TABLE */}
      </section>

    </div>
  );
}

// Export
export default CardDetailActivityHistory;
