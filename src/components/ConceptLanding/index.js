import Lottie from 'react-lottie';
import animationData from 'src/assets/lottiefiles/piggy';
import HeaderMenu from '../HeaderMenu';
import AuthModal from '../AuthModal';

// CSS
import './style.scss';

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
      <div className="w-full mx-8 px-8 rounded-md flex justify-center">

        {/* left side */}
        <div className="flex flex-col gap-8 items-start justify-center pt-16">
          <div>
            <h1 className="uppercase">Une manière <span className="underlined-title">simple</span><br />de mettre<br />de l'<span className="underlined-title">argent de côté</span></h1>
            <p className="w-[600px] mt-4">Fixez-vous des objectifs</p>
          </div>

          {/* right side */}
          <div className="flex gap-4">
            <button className="bg-[#CFB6E5] text-slate-600 font-bold px-4 rounded-lg py-2 uppercase flex items-center gap-8" type="button">Créer ma cagnotte

              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-short !cursor-none" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
              </svg>

            </button>
            <div className="uppercase text-xs underline flex gap-2 items-center" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg> En savoir plus
            </div>
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
