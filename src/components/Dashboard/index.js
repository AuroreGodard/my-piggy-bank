
import PotsCards from '../PotsCards';
import RecentActivity from '../RecentActivity';
import HeaderMenu from '../HeaderMenu';
import Sidebar from '../Sidebar';
import BottomMenu from '../BottomMenu';

function index() {
  return (
    <>
      <HeaderMenu />
      <main className="ml-8 mx-8
      xl:ml-24 xl:mx-16
      lg:ml-24"
      >
        {/* Pots listing */}
        <div className="grid gap-16 justify-center
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3 xl:gap-10"
        >
          <PotsCards />
          <PotsCards />
          <PotsCards />
          <PotsCards />
          <PotsCards />
          <PotsCards />
        </div>

        {/* Global pots activity */}
        <RecentActivity />
      </main>

      <Sidebar />
      <BottomMenu />
    </>
  );
}

export default index;
