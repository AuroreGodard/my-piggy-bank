// Import
import { Link } from 'react-router-dom';

// import assets
import alexis from 'src/assets/images/alexis.png';
import martin from 'src/assets/images/alexis.png';
import julien from 'src/assets/images/alexis.png';
import tristan from 'src/assets/images/tristan.png';
import aurore from 'src/assets/images/aurore.png';

import HeaderMenu from '../HeaderMenu';
import MemberCard from './MemberCard';

// import assets

// Import CSS
import './style.scss';

// Import assets
import piggybank from '../../assets/images/piggybank.gif';

// Component
function ConceptLanding() {
  return (
    /* HOMEPAGE container */
    <div className="flex flex-col w-full -mt-8">
      <HeaderMenu />

      {/* ---------------------------------------------------------------- */}

      {/* HERO main container */}
      <section className="w-full flex justify-center pb-16 relative px-4">

        {/* HERO limited container */}
        <div className=" flex flex-col
        xl:w-[1100px]
        lg:mx-8
        "
        >

          {/* HERO 2 cols container */}
          <div className="w-full rounded-md flex flex-col justify-between
          md:flex-row
          lg:mt-4 "
          >
            {/* left side */}
            <div className="w-full flex-col gap-8 items-start justify-center pt-16 order-2
            md:order-1
            md:w-fit
            lg:w-fit
            xl:w-fit
            "
            >

              <div className="flex flex-col items-center -mt-16
              md:items-start
              md:mt-0
              "
              >
                <h1 className="uppercase
                text-[1.4em]
                sm:text-[2em]
                "
                >
                  Une manière
                  {' '}
                  <span className="underlined-title">simple</span>
                  <br />
                  de mettre
                  <br />
                  de l'
                  <span className="underlined-title">argent de côté</span>
                </h1>
                <p className=" mt-8 text-gray-600
                "
                >
                  Fixez-vous des objectifs
                </p>
              </div>

              <div className=" flex flex-col items-center gap-4 mt-8
              md:flex-row
              md:items-center
              md:justify-start"
              >
                <button className="bg-[#CFB6E5] w-fit text-slate-600 font-bold px-6 rounded-lg py-2 uppercase flex items-center gap-2" type="button">
                  <Link to="/addpot">Créer ma cagnotte</Link>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </button>
                <div
                  className="uppercase text-xs flex flex-col gap-2 items-center text-gray-600
                md:flex-row"
                  type="button"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                  {' '}
                  En savoir plus
                </div>
              </div>
            </div>
            {/* END left side */}

            {/* RIGHT side (piggy) */}
            <div className="w-full order-1 -mt-4 flex justify-center items-center
            md:order-0
            md:w-fit
            lg:-mt-16
            "
            >
              <img
                src={piggybank}
                className="h-[14em] aspect-square
              md:h-[20em] md:aspect-square
              lg:h-[25em]
              xl:h-[30em]
              "
                alt=""
              />
            </div>
            {/* END RIGHT side (piggy) */}

          </div>
          {/* HERO 2 cols container */}

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
      <section className="w-full flex justify-center relative bg-[#F1EECD] px-4
      "
      >

        {/* STEPS limited container */}
        <div className="w-full pt-16 flex flex-col gap-8 items-center
        xl:w-[1100px]
        lg:mx-8
        md:items-start
        "
        >

          <h3 className="w-fit underline-step-title uppercase text-[1.5em]
          "
          >
            Comment ça marche ?
          </h3>
          <p className="text-gray-600">Economiser ou atteindre un objectif en seulement 4 étapes pour soi ou pour offir !</p>

          {/* STEPS cards */}
          <div className="pb-32 gap-12 grid grid-cols-1 justify-between
          lg:grid-cols-4
          md:grid-cols-4
          sm:grid-cols-2
          xs:grid-cols-1
          "
          >

            {/* SINGLE STEP card */}

            <div className="single-step-card font-bold h-24 flex justify-center items-center text-center rounded-md">
              <span className="flex items-center justify-center h-full  text-[4em] bg-[#E3C1C7] px-4 rounded-tl-md rounded-bl-md">1</span>
              <h4 className="flex items-center justify-center h-full bg-[#FFD9E0] p-8 md:p-4 w-fit rounded-tr-md rounded-br-md">Je crée mon compte</h4>
            </div>

            <div className="single-step-card font-bold h-24 flex justify-center items-center text-center rounded-md">
              <span className="flex items-center justify-center h-full  text-[4em] bg-[#AFC2B4] px-4 rounded-tl-md rounded-bl-md">2</span>
              <h4 className="flex items-center justify-center h-full bg-[#C9DECE] p-8 md:p-4 w-fit rounded-tr-md rounded-br-md">Je crée ma cagnotte </h4>
            </div>

            <div className="single-step-card font-bold h-24 flex justify-center items-center text-center rounded-md">
              <span className="flex items-center justify-center h-full  text-[4em] bg-[#BFA8D4] px-4 rounded-tl-md rounded-bl-md">3</span>
              <h4 className="flex items-center justify-center h-full bg-[#CFB6E5] p-8 md:p-4 w-fit rounded-tr-md rounded-br-md">Je dépose de l'argent sur ma cagnotte</h4>
            </div>

            <div className="single-step-card font-bold h-24 flex justify-center items-center text-center rounded-md">
              <span className="flex items-center justify-center h-full  text-[4em] bg-[#A9C6DE] px-4 rounded-tl-md rounded-bl-md">4</span>
              <h4 className="flex items-center justify-center h-full bg-[#C2E4FF] p-8 md:p-4 w-fit rounded-tr-md rounded-br-md">Je retire ou offre ma cagnotte</h4>
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

      {/* TEAM main container */}
      <section className="w-full flex justify-center relative px-4
      "
      >

        {/* TEAM limited container */}
        <div className="w-full pt-16 flex flex-col gap-8 items-center
        xl:w-[1100px]
        lg:mx-8
        md:items-start
        "
        >

          <h3 className="w-fit underline-team-title uppercase text-[1.5em]
          "
          >
            Qui sommes-nous ?
          </h3>
          <p className="text-gray-600">
            Nous avons tous suivi une formation au sein de l'école O'Clock d'une durée de 5 mois dont 1 d'une spécialité différente.
            <br />
            Notre équipe est composée de 2 développeurs back-end et 3 développeurs.euse front-end.
          </p>

          {/* TEAM cards */}
          <div className="pb-32 gap-12 grid grid-cols-1 justify-between
          lg:grid-cols-5
          md:grid-cols-3
          sm:grid-cols-2
          xs:grid-cols-1
          "
          >
            <MemberCard name="Tristan B" title="Développeur back-end" role="Product Owner / Git master back" color="bg-[#CFB6E5]" photo={tristan} />
            <MemberCard name="Martin F" title="Développeur back-end" role="Lead dev back" color="bg-[#CFB6E5]" />
            <MemberCard name="Aurore G" title="Développeur front-end" role="Scrum Master" color="bg-[#FFD9E0]" photo={aurore} />
            <MemberCard name="Julien P" title="Développeur front-end" role="Lead dev Front / Git master front" color="bg-[#C1E3FE]" />
            <MemberCard name="Alexis K" title="Développeur front-end" role="Référent technique" color="bg-[#CFB6E5]" photo={alexis} />
          </div>
          {/* END TEAM cards */}

        </div>
        {/* END TEAM limited container */}

      </section>
      {/* END TEAM main container */}

      {/* ---------------------------------------------------------------- */}

      {/* FOOTER container */}
      <section>
        <div>test</div>
      </section>
      {/* END FOOTER container */}

      {/* ---------------------------------------------------------------- */}

      {/* END HOMEPAGE container */}
    </div>
  );
}

// Export
export default ConceptLanding;
