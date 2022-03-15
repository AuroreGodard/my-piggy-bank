// Import
import PotsCards from '../PotsCards';
import RecentActivity from '../RecentActivity';

// Component
function index() {
  return (
    <main className="ml-2 mx-2
      md:mx-8 md:ml-8
      xl:ml-24 xl:mx-16
      lg:ml-24"
    >
      <div className="text-[1.5em]">
        <h3 className="w-fit underline-dashboard-activity-title uppercase text-[1.5em]
            "
        >
          Mes cagnottes
        </h3>
      </div>
      {/* Pots listing */}
      <div className="w-full grid gap-4 mt-4 justify-center
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
