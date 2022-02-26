import ActivityHistory from '../ActivityHistory';

function RecentActivity() {
  return (
    <div className="my-16 mb-24">
      <h3 className="w-full p-2 rounded-md text-white text-xs uppercase  bg-slate-800
      lg:w-[500px]
      "
      >Activité récente
      </h3>

      <ActivityHistory />

    </div>
  );
}

export default RecentActivity;
