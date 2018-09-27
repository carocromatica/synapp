import React from 'react';
import App2 from '../Components/App2';
import {  NavLink, } from "react-router-dom";
 
const Home = () => (
  <div>
    <div>

       <NavLink to='/home'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>Inicio</NavLink>
       <NavLink to='/friends'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>amigos</NavLink>
       <NavLink to='/events'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>eventos</NavLink>
       <NavLink to='/games'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>juegos</NavLink>
     
    </div>

<div>

</div>
    <h2> MURO</h2>
    <h2>HOLA SOY COMENTARIOS</h2>
  
<App2 />

 
    

  </div>
)

export default Home; 