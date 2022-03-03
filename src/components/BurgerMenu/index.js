import React, { useRef } from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDetectOutsideClick } from './useDetectOutsideClick';

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function App() {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  const logged = useSelector((state) => state.login.logged);

  return (
    <>
      <button type="button" onClick={onClick} className="">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>
      <nav
        ref={dropdownRef}
        className={`menu ${isActive ? 'active' : 'inactive'}`}
      >
        {/* AUTH buttons */}
        <div className="flex flex-col gap-2 justify-center items-center mx-4">
          {/* <div>
            <input type="checkbox" className="checkbox" id="chk" />
            <label className="label" htmlFor="chk">
              <i className="bi bi-moon" />
              <i className="bi bi-brightness-high" />
              <div className="ball" />
            </label>
          </div> */}
          {!logged
            ? (
              <>
                <NavLink to="/signup" className="mt-4 bg-[#FFD9E0] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">M'inscrire
                </NavLink>

                <NavLink to="/login" className="bg-[#C9DECE] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">Me connecter
                </NavLink>
              </>
            )
            : (
              <>
                <NavLink to="/dashboard" className="bg-[#C9DECE] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">Tableau de bord
                </NavLink>

                <NavLink to="/dashboard" className="bg-[#FFD9E0] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">Me déconnecter
                </NavLink>
              </>
            )}
        </div>
        {/* END AUTH buttons */}

        <div className="uppercase text-[1em]">
          <ul className="flex flex-col gap-2">
            <li>
              <NavLink to="/" className="bg-[#CFB6E5] w-full text-slate-600 font-bold text-center px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">Le concept
              </NavLink>
            </li>
            <li>
              <button className="bg-[#CFB6E5] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">FAQ
              </button>
            </li>
            <li>
              <button className="bg-[#CFB6E5] w-full text-slate-600 font-bold px-6 rounded-lg py-3 uppercase flex justify-center items-center gap-2" type="button">Nous contacter
              </button>
            </li>
          </ul>
        </div>
      </nav>

    </>
  );
}
