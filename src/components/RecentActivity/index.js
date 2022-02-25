import ActivityHistory from '../ActivityHistory';

function RecentActivity() {
  return (
    <div className="p-2 w-full mt-4">
      <h3 className="w-full p-2 rounded-md text-white text-xs uppercase px-4 mb-4 bg-slate-800
      lg:w-[500px]
      "
      >Activité récente
      </h3>

      <ActivityHistory />

    </div>
  );
}

export default RecentActivity;
