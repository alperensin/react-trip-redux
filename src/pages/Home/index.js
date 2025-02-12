import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {MdFlightTakeoff} from 'react-icons/md';

import api from '../../services/api';
import {addReserv} from '../../store/modules/reserve/actions';
import './style.css';

export default function Home() {

    const dispatch = useDispatch();

    const [trips, setTrips] = useState([]);

    useEffect(() => {  
        async function loadApi(){
            const response = await api.get('trips');
            setTrips(response.data);
        }

        loadApi();
    }, []);


    function handleAdd(trip) {
        dispatch(addReserv(trip));
    }

 return (
     <div>
         <div className="box">
             {trips.map(trip => (
                 <li key={trip.id}>
                    <img src={trip.image} alt={trip.title} />
                    <strong>{trip.title}</strong>
                    <span> Status: {trip.status ? 'Disponível' : 'Indisponível'} </span>

                    <button type="button" onClick={() => handleAdd(trip)}>
                        <div>
                            <MdFlightTakeoff  size={16} color="#FFF" />
                        </div>
                        <span>Solicitar Reserva</span>
                    </button>
                 </li>
             ))}
         </div>
     </div>
 );
}