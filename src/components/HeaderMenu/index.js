// Import
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

// import assets
import mpbInline from 'src/assets/images/mpb-logo-inline.svg';

// Import style
import './style.scss';
import BurgerMenu from 'src/components/BurgerMenu';

// Component
function HeaderMenu() {
  return (
    <header className="z-50 h-[70px] w-screen flex items-center fixed top-0 justify-between pr-5 space-x-10 bg-[#C9DECE]">

      {/* Logo */}
      <NavLink to="/">
        <div id="logo" className="text-slate-600 p-2 rounded-sm uppercase flex gap-2 items-center w-48">
          <img className="" src={mpbInline} alt="" />
        </div>
      </NavLink>
      {/* <nav className="gap-4 hidden
      xl:flex"
      >
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/signup">SignUp</NavLink>
        {logged && (token !== null) ? (<span className="cursor-pointer" onClick={handleLogout} id="logout">Logout</span>) : (<NavLink to="/login">Login</NavLink>) }

      </nav> */}

      {/*  Burger menu  */}
      <div className="flex justify-center items-center h-10 w-10 rounded-full cursor-pointer bg-[#FFD9E0]">
        <BurgerMenu />

      </div>
      {/*  END Burger menu  */}

    </header>
  );
}

// Export
export default HeaderMenu;
