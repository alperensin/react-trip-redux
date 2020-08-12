import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {MdDelete, MdAddCircle, MdRemoveCircle} from 'react-icons/md';

import {removeReserve, updateAmountReserve} from '../../store/modules/reserve/actions';
import './style.css';

export default function Reservas() {

  const reserves = useSelector(state => state.reserve);
  const dispatch = useDispatch();

  function handleRemove(id){
    dispatch(removeReserve(id));
  }

  function decrementAmount(reserve){
    dispatch(updateAmountReserve(reserve.id, reserve.amount - 1));
  }

  function incrementAmount(reserve){
    dispatch(updateAmountReserve(reserve.id, reserve.amount + 1));
  }

 return (
   <div>
     <h1 className="title"> {reserves.length > 0 ? (reserves.length > 1 ? `Você possui ${reserves.length} reservas.`  : `Você possui ${reserves.length} reserva.`) : "Você não possui reservas."} </h1>
     {reserves.map(reserve => (
      <div className="reservas" key={reserve.id} >
       <img src={reserve.image} alt={reserve.title} />
       <strong>{reserve.title}</strong>
       <div className="reserve-amount">
          <button onClick={() => decrementAmount(reserve)}>
            <MdRemoveCircle size={15} color="#191919" />
          </button>
          <input type="text" readOnly value={reserve.amount} />
          <button onClick={() => incrementAmount(reserve)}>
            <MdAddCircle size={15} color="#191919" />
          </button> 
      </div>
       <button type="button" onClick={() => handleRemove(reserve.id)} >
         <MdDelete size={20} color="#191919" />
       </button>
    </div>
     ))}

     <footer>
       <button type="button" >
         Solicitar Reservas
       </button>
     </footer>

   </div>
  );
}