// Import
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactModal from 'react-modal';
import {
  setAmountAdd,
  setAmountWithdraw,
  setShowModalAddTrue,
  setShowModalAddFalse,
  setShowModalWithdrawFalse,
  setShowModalWithdrawTrue,
  getIdFromPotDetail,
  getPotId,
} from '../../actions/pots';

// Import component
import CardDetailActivityHistory from '../CardDetailActivityHistory';

// Import style
import './style.scss';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#root');

// Component
function PotDetails() {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  dispatch(getIdFromPotDetail(params));

  const amountAdd = useSelector((state) => state.pots.amountAdd);
  const amountWithdraw = useSelector((state) => state.pots.amountWithdraw);
  const potDatas = useSelector((state) => state.pots.potDatas);
  const showModalAdd = useSelector((state) => state.pots.showModalAdd);
  const showModalWithdraw = useSelector((state) => state.pots.showModalWithdraw);

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

  useEffect(() => {
    dispatch(getPotId());
  }, []);

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
    event.preventDefault();
    dispatch(setShowModalAddFalse());
  };

  const OnSubmitAmountWithdraw = (event) => {
    event.preventDefault();
    dispatch(setShowModalWithdrawFalse());
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
                <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" className="bi bi-piggy-bank" viewBox="0 0 16 16">
                  <path d="M5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm1.138-1.496A6.613 6.613 0 0 1 7.964 4.5c.666 0 1.303.097 1.893.273a.5.5 0 0 0 .286-.958A7.602 7.602 0 0 0 7.964 3.5c-.734 0-1.441.103-2.102.292a.5.5 0 1 0 .276.962z" />
                  <path fillRule="evenodd" d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595zM2.516 6.26c.455-2.066 2.667-3.733 5.448-3.733 3.146 0 5.536 2.114 5.536 4.542 0 1.254-.624 2.41-1.67 3.248a.5.5 0 0 0-.165.535l.66 2.175h-.985l-.59-1.487a.5.5 0 0 0-.629-.288c-.661.23-1.39.359-2.157.359a6.558 6.558 0 0 1-2.157-.359.5.5 0 0 0-.635.304l-.525 1.471h-.979l.633-2.15a.5.5 0 0 0-.17-.534 4.649 4.649 0 0 1-1.284-1.541.5.5 0 0 0-.446-.275h-.56a.5.5 0 0 1-.492-.414l-.254-1.46h.933a.5.5 0 0 0 .488-.393zm12.621-.857a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199z" />
                </svg>
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
            <button onClick={() => dispatch(setShowModalAddTrue())} className="mt-4 bg-[#C9DECE] w-[200px] text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">
              Ajouter
            </button>
            <button onClick={() => dispatch(setShowModalWithdrawTrue())} className="mt-4 bg-[#FFD9E0] w-[200px] text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">
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
        <CardDetailActivityHistory />
      </section>
      {/* End Card details Activity */}

      {/* Modal for 'Ajouter' et 'Retirer' buttons */}

      {/* Modal for 'Ajouter' button */}
      <ReactModal
        isOpen={showModalAdd}
        onRequestClose={() => dispatch(setShowModalAddFalse())}
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
            <input onClick={() => dispatch(setShowModalAddFalse())} type="submit" className="mt-4 w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2 cursor-pointer" value="Fermer" />
            <input type="submit" className="mt-4 bg-[#C9DECE] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2 cursor-pointer" value="Ajouter" />
          </div>
        </form>
      </ReactModal>

      {/* Modal for 'Retirer' button */}
      <ReactModal
        isOpen={showModalWithdraw}
        onRequestClose={() => dispatch(setShowModalWithdrawFalse())}
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
            <input onClick={() => dispatch(setShowModalWithdrawFalse())} type="submit" className="mt-4 w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2 cursor-pointer" value="Fermer" />
            <input type="submit" className="mt-4 bg-[#FFD9E0] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2 cursor-pointer" value="Retirer" />
          </div>
        </form>
      </ReactModal>
    </main>
  );
}

// Export
export default PotDetails;

// modal withdraw
/* const options = {
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
  }); */
