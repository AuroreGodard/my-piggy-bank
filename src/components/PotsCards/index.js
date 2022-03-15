// Import
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';
import { pots } from '../../actions/pots';

// Component
function PotsCards() {
  const potsMap = useSelector((state) => state.pots.pots);
  const dispatch = useDispatch();

  let bar = 'block';

  useEffect(() => {
    dispatch(pots());
  }, []);

  const date = (dateFormat) => {
    const formatFr = new Date(dateFormat).toLocaleString('fr');
    return `${formatFr.substr(0, 10)}`;
  };

  const progressBarFullPotNull = (percentage) => {
    if (percentage > 100) {
      return '100';
    }
    return percentage;
  };

  const amoutGoalNull = (amountGoal) => {
    if (amountGoal === null) {
      bar = 'none';
      return 'Objectif cagnotte : non';
    }
    return `Objectif cagnotte : ${amountGoal} €`;
  };

  return (
    <>
      {
       potsMap.map(
         (pot) => (
           // Link to component 'Potdetail' with id
           <NavLink to={`/potdetails/${pot.id}`} key={pot.id} className="cards-shadows min-h-64 rounded-lg flex-col cursor-pointer bg-white pb-2">
             <div className="flex">
               <div className="flex justify-center items-center h-32 w-32 bg-sky-100 m-2 p-2 rounded-lg">
                 photo
               </div>
               <div className="flex flex-col w-2/3">
                 <h4 className=" font-bold uppercase my-4 ">{pot.name}</h4>
                 <p>
                   {amoutGoalNull(pot.amountGoal)}
                 </p>
                 <p>
                   Date de l'objectif :
                   {date(pot.dateGoal)}
                 </p>
               </div>
             </div>
             <div className="flex justify-end text-4xl text-slate-800 w-full px-4">
               <div className="bg-[#C9DECE] rounded-md px-2">
                 {pot.amount}
                 <span className="font-bold pl-1">€</span>
               </div>
             </div>
             <div style={{ display: pot.amountGoal ? 'block' : 'none' }} className="mt-2 mx-2 bg-gray-400 rounded-full">
               {/* Progress bar */}
               <div className="mt-2 bg-[#FFD9E0] text-center rounded-full" style={{ width: `${progressBarFullPotNull(Math.round((pot.amount / pot.amountGoal) * 100))}` + '%', minWidth: '15%' }}>
                 <div className="text-black text-sm inline-block px-2 rounded-full">
                   {progressBarFullPotNull(Math.round((pot.amount / pot.amountGoal) * 100))}
                   %
                 </div>
               </div>
             </div>
           </NavLink>
         ),
       )
       }
    </>
  );
}

// Export
export default PotsCards;
