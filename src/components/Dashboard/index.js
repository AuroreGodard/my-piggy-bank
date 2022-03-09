// Import
import PotsCards from '../PotsCards';
import RecentActivity from '../RecentActivity';
import HeaderMenu from '../HeaderMenu';
import Sidebar from '../Sidebar';
import BottomMenu from '../BottomMenu';

// Component
function index() {
  return (
    <main className="ml-2 mx-2
      md:mx-8 md:ml-8
      xl:ml-24 xl:mx-16
      lg:ml-24"
    >
      {/* Pots listing */}
      <div className="w-full grid gap-4 justify-center
        sm:grid-cols-2
        md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-3 xl:gap-10"
      >
        <PotsCards />
      </div>

      {/* Global pots activity */}
      <RecentActivity />
    </main>
  );
}

// Export
export default index;
