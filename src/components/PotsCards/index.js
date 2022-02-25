function PotsCards() {
  return (
    <>
      {/*  Single card  */}
      <div className="w-96 h-60 rounded-lg flex-col bg-gray-100 hover:shadow-xl">
        {/* img container */}
        <div className="flex">
          <div className="flex justify-center items-center h-32 w-32 bg-green-200 m-2 p-2 rounded-lg">
            photo
          </div>
          <div className="flex flex-col w-2/3">
            <h4 className=" font-bold uppercase my-4 ">Titre</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis bibendum leo risus, a ultrices ligula pretium ut.
            </p>
          </div>
        </div>
        <div className="text-4xl text-slate-800 w-full text-right px-4">XXXX,XX <span className="font-bold">€</span> </div>
        <div className="mt-2 mx-2 bg-gray-600 rounded-full">

          {/* Progress bar */}
          <div className="w-8/12 mt-2 bg-green-200 text-center rounded-full"><div className="text-white text-sm inline-block bg-slate-700 px-2 rounded-full">75%</div></div>
        </div>
      </div>
    </>
  );
}

export default PotsCards;
