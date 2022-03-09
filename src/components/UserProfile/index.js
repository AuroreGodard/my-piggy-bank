import { useDispatch, useSelector } from 'react-redux';
import './style.scss';
import { NavLink } from 'react-router-dom';

// import components
import HeaderMenu from '../HeaderMenu';
import Sidebar from '../Sidebar';
import BottomMenu from '../BottomMenu';

// Component
function UserProfile() {
  const username = useSelector((state) => state.login.username);
  const firstname = useSelector((state) => state.login.user.firstname);

  return (
    <>
      <HeaderMenu />
      <main className="h-full ml-2 mx-2 mb-16
      flex flex-col gap-8
      xl:ml-24 xl:mx-16
      lg:ml-24 lg:mb-8"
      >

        {/* WELCOME TITLE */}
        <section className="uppercase text-[1.5em]  flex items-start
        lg:mb-4
            "
        >
          <div className="flex items-center">
            {/*  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person h-48 w-48 bg-[#F1EECD] rounded-full p-10" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
            </svg> */}
            <h3 className="underline-userprofile-title uppercase text-[1.5em]
              "
            >
              Hello
              {' '}

            </h3>
            <span className="uppercase text-[1.5em] username-welcome-msg">
              {firstname}
              ,
            </span>

          </div>
        </section>
        {/* END WELCOME TITLE */}

        {/* FORM SECTION */}
        <section className="w-full flex flex-col gap-2
        md:w-[500px]
        "
        >

          <h3 className="w-fit underline-userprofile-informations uppercase text-[1.4em] mb-4
          lg:mb-8
          "
          >
            Vos informations personnelles
          </h3>
          <div>
            <label htmlFor="firstname" className="text-sm font-medium text-gray-900 block mb-2 ">Votre prénom</label>
            <input type="text" name="firstname" className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 " value={firstname} required />
          </div>

          <div>
            <label htmlFor="lastname" className="text-sm font-medium text-gray-900 block mb-2 ">Votre nom</label>
            <input type="text" name="lastname" className="bg-gray-50 border border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 " placeholder="Dupont" required />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-900 block mb-2 ">Votre email</label>
            <input type="email" name="email" className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 " placeholder="luciendupont@gmail.com" required />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2">Votre mot de passe</label>
            <input type="text" name="password" className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 " placeholder="********" required />
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 ">Confirmer votre mot de passe</label>
            <input type="text" name="password" className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 " placeholder="********" required />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-900 block mb-2 ">Confirmer votre mot de passe</label>
            <input type="text" name="password" className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 " placeholder="********" required />
          </div>

          <div>
            <label htmlFor="phone" className="text-sm font-medium text-gray-900 block mb-2 ">Votre téléphone</label>
            <input type="text" name="phone" className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 d" placeholder="+33 601020304" required />
          </div>

          <div>
            <label htmlFor="birthdate" className="text-sm font-medium text-gray-900 block mb-2">Votre date de naissance</label>
            <input type="date" name="birthdate" className="bg-gray-50  border-gray-200 text-gray-900 sm:text-sm rounded-lg focus:ring-[#C1E3FE] border-2 focus:border-[#C1E3FE] block w-full p-2.5 " required />
          </div>

          <NavLink to="/signup" className="mt-4 bg-[#FFD9E0] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">
            Modifier mes informations
          </NavLink>

        </section>
        {/* END FORM SECTION */}

      </main>

      <Sidebar />
      <BottomMenu />
    </>
  );
}

// Export
export default UserProfile;
