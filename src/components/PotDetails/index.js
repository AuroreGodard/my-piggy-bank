// Import
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import { axiosInstance } from 'src/components/App';
import Swal from 'sweetalert2';
import { setAmountAdd, setAmountWithdraw } from '../../actions/pots';

// Import component
import CardDetailActivityHistory from '../CardDetailActivityHistory';

// Import style
import './style.scss';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#root');

// Component
function PotDetails() {
  // use of useParams hook to get the variable parameter of the url (id)
  const params = useParams();

  const dispatch = useDispatch();

  // place datas from API in state
  const [potDatas, setPotDatas] = useState([]);

  const amountAdd = useSelector((state) => state.pots.amountAdd);
  const amountWithdraw = useSelector((state) => state.pots.amountWithdraw);

  const [addFunds, setAddFunds] = useState([]);
  const [withdrawFunds, setWithdrawFunds] = useState([]);

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalWithdraw, setShowModalWithdraw] = useState(false);

  // use of useEffect hook to make an asynchronous call to API with the given id of the URL
  // (from the single card we clicked)
  useEffect(() => {
    const token = localStorage.getItem('token');

    axiosInstance.get(`/pots/${params.id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        // console.log(res.data);
        setPotDatas(res.data);
        console.log(potDatas);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [addFunds, withdrawFunds]);

  let bar = 'block';

  const date = (dateFormat) => {
    const formatFr = new Date(dateFormat).toLocaleString('fr');
    return `Création de le cagnotte : ${formatFr.substr(0, 10)}`;
  };

  const progressBarFullPotNull = (percentage) => {
    if (percentage > 100) {
      return '100';
    }
    return percentage;
  };

  const amoutGoalNull = (amountGoal) => {
    if (amountGoal === null) {
      bar = 'none';
      return "Pas d'objectif de montant";
    }
    return `Objectif cagnotte: ${amountGoal} €`;
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const OnSubmitAmountAdd = (event) => {
    const token = localStorage.getItem('token');
    event.preventDefault();

    const options = {
      method: 'POST',
      url: '/operations',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { type: true, amount: amountAdd, pot: params.id },
    };

    axiosInstance.request(options)
      .then((response) => {
        console.log('onsubmitadd', response.data.amount);
        setShowModalAdd(false);
        setAddFunds(response.data.amount);
        // window.location.reload(true);
        Swal.fire({
          position: 'bottom-left',
          icon: 'success',
          title: `Dépôt de ${amountAdd}€ réussi`,
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          timerProgressBar: true,
          showclass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'modal-login-success',
          },
        });
      }).catch((error) => {
        console.error(error);
        Swal.fire({
          position: 'bottom-left',
          icon: 'error',
          title: "Une erreur s'est produite",
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          timerProgressBar: true,
          showclass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'modal-login-success',
          },
        });
      });
  };

  const OnSubmitAmountWithdraw = (event) => {
    const token = localStorage.getItem('token');
    event.preventDefault();

    const options = {
      method: 'POST',
      url: '/operations',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: { type: false, amount: amountWithdraw, pot: params.id },
    };

    axiosInstance.request(options)
      .then((response) => {
        console.log(response.data);
        setShowModalWithdraw(false);
        setWithdrawFunds(response.data.amount);
        // window.location.reload(true);
        Swal.fire({
          position: 'bottom-left',
          icon: 'success',
          title: `Retrait de ${amountWithdraw}€ réussi`,
          showConfirmButton: false,
          timer: 2000,
          toast: true,
          timerProgressBar: true,
          showclass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'modal-login-success',
          },
        });
      }).catch((error) => {
        console.error(error);
        Swal.fire({
          position: 'bottom-left',
          icon: 'error',
          title: 'Montant du retrait trop important',
          showConfirmButton: false,
          timer: 3000,
          toast: true,
          timerProgressBar: true,
          showclass: {
            popup: 'swal2-show',
            backdrop: 'swal2-backdrop-show',
            icon: 'modal-login-success',
          },
        });
      });
  };

  return (

    <main className="ml-2 mx-2 flex flex-col gap-8 mb-20
      md:mx-8 md:ml-8 md:mb-0
      xl:ml-24 xl:mx-16
      lg:ml-24"
    >
      {/* bloc card details */}
      <div>

        {/* Pot Card Title */}
        <div className="flex flex-col items-start text-[1.5em] gap-2
          md:flex-row md:gap-0"
        >
          <h3 className="underline-potdetails-title uppercase text-[1.5em]
            ml-[0.075em] md:ml-0"
          >
            Détails de la cagnotte :
          </h3>
          <span className="uppercase text-[1.5em] username-welcome-msg
            "
          >
            {potDatas.name}
          </span>
        </div>
        {/* End Pot Card Title */}

        {/* Pot Card section */}
        <section className="flex w-full flex-col lg:flex-row">

          {/* Pot Card */}
          <div className="card-pot-details-shadow
            mt-8 w-full max-w-[700px] min-h-64 rounded-lg flex-col bg-white pb-2
            lg:w-3/4"
          >
            <div className="flex">
              <div className="flex justify-center items-center h-32 w-32 bg-sky-100 m-2 p-2 rounded-lg">
                photo
              </div>
              <div className="flex flex-col w-2/3 mt-4 gap-2">

                <p>
                  {amoutGoalNull(potDatas.amountGoal)}
                </p>
                <p>
                  {date(potDatas.createdAt)}
                </p>
              </div>
            </div>
            <div className="flex justify-end text-4xl text-slate-800 w-full px-4">
              <div className="bg-[#C9DECE] rounded-md px-2">
                {potDatas.amount}
                <span className="font-bold pl-1">€</span>
              </div>
            </div>
            <div style={{ display: `${bar}` }} className="mt-2 mx-2 bg-gray-300 rounded-full">
              {/* Progress bar */}
              <div className="mt-2 flex justify-start text-center rounded-full ">
                <div className=" bg-[#CFB6E5] text-black text-sm inline-block px-2 rounded-full" style={{ width: `${progressBarFullPotNull(Math.round((potDatas.amount / potDatas.amountGoal) * 100))}` + '%', minWidth: '15%' }}>
                  {progressBarFullPotNull(
                    Math.round((potDatas.amount / potDatas.amountGoal) * 100),
                  )}
                  %
                </div>
              </div>
            </div>
          </div>
          {/* Pot Card */}

          {/* add/withdraw on pot */}
          <div className="flex flex-row justify-center items-center gap-4
            md:justify-start
            lg:flex-col lg:w-1/4 lg:px-8 lg:gap-0 lg:justify-center "
          >
            <button onClick={() => setShowModalAdd(true)} className="mt-4 bg-[#C9DECE] w-[200px] text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">
              Ajouter
            </button>
            <button onClick={() => setShowModalWithdraw(true)} className="mt-4 bg-[#FFD9E0] w-[200px] text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">
              Retirer
            </button>
          </div>
          {/* END add/withdraw on pot */}

        </section>
        {/* End Pot Card section */}

      </div>
      {/* END bloc card details */}

      {/* Card details Activity */}
      <section>
        <CardDetailActivityHistory addFunds={addFunds} withdrawFunds={withdrawFunds} />
      </section>
      {/* End Card details Activity */}

      {/* Modal for 'Ajouter' et 'Retirer' buttons */}

      {/* Modal for 'Ajouter' button */}
      <ReactModal
        isOpen={showModalAdd}
        onRequestClose={() => setShowModalAdd(false)}
        style={customStyles}
        overlayClassName="Overlay"
        className="modal"
      >
        <form onSubmit={OnSubmitAmountAdd} className="flex flex-col gap-4">
          <h3 className="w-fit underline-modal-add uppercase text-[1.4em] text-center mb-4 lg:mb-8">
            Ajouter de l'argent
          </h3>
          <div>
            <label htmlFor="goalamount" className="text-sm font-medium text-gray-900 block mb-2">Montant à ajouter</label>
            <input
              type="number"
              value={amountAdd}
              name="amountAdd"
              className="bg-gray-50 border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5"
              placeholder="1.000 €"
              required
              onChange={
                (event) => {
                  dispatch(setAmountAdd(parseInt(event.target.value, 10)));
                }
            }
            />
            <p className="my-4 text-gray-500 text-xs italic">Indiquez ci-dessus le montant que vous souhaiter ajouter à votre cagnotte.</p>
          </div>
          <div className="flex gap-4">
            <input onClick={() => setShowModalAdd(false)} type="submit" className="mt-4 w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2 cursor-pointer" value="Fermer" />
            <input type="submit" className="mt-4 bg-[#C9DECE] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2 cursor-pointer" value="Ajouter" />
          </div>
        </form>
      </ReactModal>

      {/* Modal for 'Retirer' button */}
      <ReactModal
        isOpen={showModalWithdraw}
        onRequestClose={() => setShowModalWithdraw(false)}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
        className="modal"
      >
        <form onSubmit={OnSubmitAmountWithdraw} className="flex flex-col gap-4">
          <h3 className="w-fit underline-modal-withdraw uppercase text-[1.4em] text-center mb-4 lg:mb-8">
            Retirer de l'argent
          </h3>
          <div>
            <label htmlFor="goalamount" className="text-sm font-medium text-gray-900 block mb-2">Montant à retirer</label>
            <input
              type="number"
              value={amountWithdraw}
              name="amountWithdraw"
              className="bg-gray-50 border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5"
              placeholder="1.000 €"
              required
              onChange={
                (event) => {
                  dispatch(setAmountWithdraw(parseInt(event.target.value, 10)));
                }
            }

            />
            <p className="my-4 text-gray-500 text-xs italic">Indiquez ci-dessus le montant que vous souhaiter retirer de votre cagnotte.</p>
          </div>
          <div className="flex gap-4">
            <input onClick={() => setShowModalWithdraw(false)} type="submit" className="mt-4 w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2 cursor-pointer" value="Fermer" />
            <input type="submit" className="mt-4 bg-[#FFD9E0] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2 cursor-pointer" value="Retirer" />
          </div>
        </form>
      </ReactModal>
    </main>
  );
}

// Export
export default PotDetails;
