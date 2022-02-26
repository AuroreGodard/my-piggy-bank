import Lottie from 'react-lottie';
import animationData from 'src/assets/lottiefiles/piggy';
import HeaderMenu from '../HeaderMenu';
import AuthModal from '../AuthModal';

// Lottie

function ConceptLanding() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="w-full flex justify-center">
      <HeaderMenu />

      {/* HERO container */}
      <div className="w-full m-8 p-8 -ml-24 rounded-md flex justify-center">

        <div className="flex flex-col gap-8 items-start justify-center">
          <div>
            <h1 className="text-2xl uppercase">Une manière simple<br />de mettre<br />de l'argent de côté</h1>
            <p className="w-[600px] mt-4">Fixez-vous des objectifs</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-[#CFB6E5] text-slate-600 font-bold px-10 rounded-lg py-2 uppercase flex items-center gap-8" type="button">Créer ma cagnotte

              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-short !cursor-none" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>

            </button>
            <button className="uppercase text-xs underline" type="button">En savoir plus</button>
          </div>
        </div>

        {/* piggy hero img */}
        <div>
          <Lottie
            options={defaultOptions}
            height={500}
            width={500}
          />
        </div>

      </div>

    </div>

  );
}

export default ConceptLanding;
