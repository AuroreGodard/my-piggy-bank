import alexis from 'src/assets/images/alexis.png';

function MemberCard({
  photo, color, name, title, role,
}) {
  return (
    <>
      {/* member card */}
      <div className="member-card h-72 w-48 shadow-md flex flex-col items-center rounded-md px-2 py-6" key={name}>
        <div className={`${color} h-36 w-36 rounded-full flex justify-center items-center`}>
          <img className="h-44 mb-3" src={photo} alt="" />

        </div>
        <div className="text-center mt-4 flex flex-col gap-1">
          <h4 className="tracking-widest">{name}</h4>
          <p className="mt-2 text-gray-500 text-sm">{title}</p>
          <p className=" text-gray-800 text-sm">
            {role}

          </p>
        </div>
      </div>
      {/* ENDmember card */}
    </>
  );
}

export default MemberCard;
