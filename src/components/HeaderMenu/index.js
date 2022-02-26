import { NavLink } from 'react-router-dom';

function HeaderMenu() {
  return (
    <header className="h-[70px] w-screen flex items-center fixed top-0 justify-between px-5 space-x-10 bg-slate-200">

      {/* Logo */}
      <NavLink to="/">
        <div className="text-white bg-slate-600 p-2 rounded-sm uppercase">
          My Piggy Bank
        </div>
      </NavLink>
      <nav className="flex gap-4">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <div className="flex justify-center items-center h-10 w-10 rounded-full cursor-pointer bg-green-200 border-2 border-blue-400">

        {/*  Burger menu  */}
        <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>

    </header>
  );
}

export default HeaderMenu;
