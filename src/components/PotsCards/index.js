import './style.scss';

function PotsCards() {
  return (
    <>
      {/*  Single card  */}
      <div className="cards-shadows h-60 rounded-lg flex-col cursor-pointer bg-white

      "
      >
        {/* img container */}
        <div className="flex">
          <div className="flex justify-center items-center h-32 w-32 bg-sky-100 m-2 p-2 rounded-lg">
            photo
          </div>
          <div className="flex flex-col w-2/3">
            <h4 className=" font-bold uppercase my-4 ">Titre</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum leo risus, a ultrices ligula pretium ut.
            </p>
          </div>
        </div>
        <div className="flex justify-end text-4xl text-slate-800 w-full px-4">
          <div className="bg-[#C9DECE] rounded-md px-2">XXXX,XX <span className="font-bold">€</span></div>
        </div>
        <div className="mt-2 mx-2 bg-gray-400 rounded-full">

          {/* Progress bar */}
          <div className="w-8/12 mt-2 bg-[#FFD9E0] text-center rounded-full"><div className="text-black text-sm inline-block px-2 rounded-full">75%</div></div>
        </div>
      </div>
    </>
  );
}

export default PotsCards;
