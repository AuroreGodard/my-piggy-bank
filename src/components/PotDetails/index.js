// Import
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import ReactDOM from 'react-dom';

// Import component
import { axiosInstance } from 'src/components/App';
import CardDetailActivityHistory from '../CardDetailActivityHistory';

// Import style
import './style.scss';

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
ReactModal.setAppElement('#root');

// Component
function PotDetails() {
  // use of useParams hook to get the variable parameter of the url (id)
  const params = useParams();

  // place datas from API in state
  const [potDatas, setPotDatas] = useState([]);

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
        console.log(res.data);
        setPotDatas(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

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

  let subtitle;

  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalWithdraw, setShowModalWithdraw] = useState(false);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

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
        <CardDetailActivityHistory />
      </section>
      {/* End Card details Activity */}
      <ReactModal
        isOpen={showModalAdd}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => setShowModalAdd(false)}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={() => setShowModalAdd(false)}>close</button>
        <div>Modal add</div>

      </ReactModal>
      <ReactModal
        isOpen={showModalWithdraw}
        onAfterOpen={afterOpenModal}
        onRequestClose={() => setShowModalWithdraw(false)}
        style={customStyles}
        contentLabel="Example Modal"
        overlayClassName="Overlay"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={() => setShowModalWithdraw(false)}>close</button>
        <div>Modal Withdraw</div>

      </ReactModal>
    </main>
  );
}

// Export
export default PotDetails;
