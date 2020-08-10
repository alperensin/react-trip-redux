import React from 'react';
import {Link} from 'react-router-dom';

import './style.css';

import Logo from '../../assets/logo.svg';

export default function Header() {
 return (
   <header className="container">
       <Link to="/">
        <img className="logo" src={Logo} alt="Logo Projeto" />
       </Link>
       <Link className="reserva" to="/reservas">
           <div>
               <strong>Minhas Reservas</strong>
               <span>3 reservas</span>
           </div>
       </Link>
   </header>
 );
}