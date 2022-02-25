import PotsCards from '../PotsCards';
import RecentActivity from '../RecentActivity';
import HeaderMenu from '../HeaderMenu';
import Sidebar from '../Sidebar';
import BottomMenu from '../BottomMenu';

function index() {
  return (
    <>
      <div className="h-screen w-full bg-white relative flex overflow-hidden ">

        {/*  Sidebar  */}
        <Sidebar />
        <div className="w-full h-full flex flex-col justify-between">

          {/*  Header  */}
          <HeaderMenu />

          {/*  Main  */}
          <main className="flex flex-col h-full w-full items-start relative overflow-auto
          lg:p-10 "
          >

            {/*   All Cards  */}
            <div className="w-full p-2 flex flex-wrap rounded-tl gap-10 justify-between
            lg:justify-start "
            >
              <PotsCards />
              <PotsCards />
              <PotsCards />
              <PotsCards />
              <PotsCards />

            </div>
            <RecentActivity />
          </main>
          <BottomMenu />
        </div>

      </div>
    </>
  );
}

export default index;
