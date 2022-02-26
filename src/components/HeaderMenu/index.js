function HeaderMenu() {
  return (
    <header className="h-16 w-full flex items-center relative justify-between px-5 space-x-10 bg-slate-200">

      {/*  Burger menu  */}

      {/* Logo */}
      <div className="text-white bg-slate-600 p-2 rounded-sm uppercase">
        My Piggy Bank
      </div>

      <div className="flex justify-center items-center h-10 w-10 rounded-full cursor-pointer bg-green-200 border-2 border-blue-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>

    </header>
  );
}

export default HeaderMenu;
