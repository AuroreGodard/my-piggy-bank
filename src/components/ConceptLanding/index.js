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
    /* HOMEPAGE container */
    <div className="flex flex-col w-full">
      <HeaderMenu />

      {/* ---------------------------------------------------------------- */}

      {/* HERO main container */}
      <section className="w-full flex justify-center pb-4 relative">

        {/* HERO limited container */}
        <div className="w-[1100px] flex flex-col ">

          <div className="mx-8 px-8 rounded-md flex justify-center">
            {/* left side */}
            <div className="flex flex-col gap-8 items-start justify-center pt-16">
              <div>
                <h1 className="uppercase">Une manière <span className="underlined-title">simple</span><br />de mettre<br />de l'<span className="underlined-title">argent de côté</span></h1>
                <p className="w-[600px] mt-8 text-gray-600">Fixez-vous des objectifs</p>
              </div>
              {/* right side */}
              <div className="flex gap-4">
                <button className="bg-[#CFB6E5] text-slate-600 font-bold px-6 rounded-lg py-2 uppercase flex items-center gap-2" type="button">Créer ma cagnotte
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </button>
                <div className="uppercase text-xs flex gap-2 items-center" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg> En savoir plus
                </div>
              </div>
            </div>
            {/* END left side */}

            {/* right side (piggy) */}
            <div>
              <Lottie
                options={defaultOptions}
                height={500}
                width={500}
              />
            </div>
            {/* END right side (piggy) */}

          </div>
          {/* END HERO container */}

        </div>
        {/* END HERO limited container */}

        {/* HERO shape divider */}
        <div className="custom-shape-divider-bottom-1645895499">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" />
          </svg>
        </div>
        {/* END HERO shape divider */}

      </section>
      {/* END HERO main container */}

      {/* ---------------------------------------------------------------- */}

      {/* STEPS main container */}
      <section className="w-full flex justify-center p-16 relative bg-[#F1EECD]">

        {/* STEPS limited container */}
        <div className="w-[1100px] flex flex-col items-center gap-16">

          <h3 className="w-fit underline-step-title text-center uppercase">
            Comment créer ma cagnotte
          </h3>

          {/* STEPS cards */}
          <div className="h-full gap-48 flex justify-between">

            {/* SINGLE STEP card */}

            <div className=" h-24 w-32 flex flex-col gap-4 items-start text-center rounded-md">
              <span className="text-[4em]">1</span>
              <h4>Créer mon compte</h4>
            </div>

            <div className=" h-24 w-32 flex flex-col gap-4 items-start text-center rounded-md">
              <span className="text-[4em]">2</span>
              <h4>Créer mon compte</h4>
            </div>

            <div className=" h-24 w-32 flex flex-col gap-4 items-start text-center rounded-md">
              <span className="text-[4em]">3</span>
              <h4>Créer mon compte</h4>
            </div>

            <div className=" h-24 w-32 flex flex-col gap-4 items-start text-center rounded-md">
              <span className="text-[4em]">4</span>
              <h4>Créer mon compte</h4>
            </div>

            {/* END SINGLE STEP card */}

          </div>
          {/* END STEPS cards */}

        </div>
        {/* END STEPS limited container */}

        {/* STEPS shape divider */}
        <div className="custom-shape-divider-bottom-1645896674">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill" />
          </svg>
        </div>
        {/* END STEPS shape divider */}

      </section>
      {/* END STEPS main container */}

      {/* ---------------------------------------------------------------- */}

      {/* END HOMEPAGE container */}
    </div>
  );
}

export default ConceptLanding;
