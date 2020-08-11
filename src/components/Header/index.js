import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import './style.css';

import Logo from '../../assets/logo.svg';

export default function Header() {

    const reserveSize = useSelector(state => state.reserve.length);

 return (
   <header className="container">
       <Link to="/">
        <img className="logo" src={Logo} alt="Logo Projeto" />
       </Link>
       <Link className="reserva" to="/reservas">
           <div>
               <strong>Minhas Reservas</strong>
               <span> {reserveSize} reservas</span>
           </div>
       </Link>
   </header>
 );
}