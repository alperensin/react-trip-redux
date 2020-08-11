import React from 'react';
import {useSelector} from 'react-redux';
import {MdDelete} from 'react-icons/md';

import './style.css';

export default function Reservas() {

  const tripsSelected = useSelector(state => state.reserve)

 return (
   <div>
     <h1 className="title">Você solicitou 1 reservas</h1>
     <div className="reservas">
        <img src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg" alt="Maceio" />
        <strong>Titulo</strong>
        <span>Quantidade: 2</span>
        <button type="button" onClick={() => {}} >
          <MdDelete size={20} color="#191919" />
        </button>
     </div>

     <footer>
       <button type="button" >
         Solicitar Reservas
       </button>
     </footer>

   </div>
  );
}