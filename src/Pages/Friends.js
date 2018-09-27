import React from 'react';
import {  NavLink, } from "react-router-dom";
 
const Friends = () => (
  <div>
  
      <NavLink to='/home'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>Inicio</NavLink>
       <NavLink to='/friends'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>amigos</NavLink>
       <NavLink to='/events'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>eventos</NavLink>
       <NavLink to='/games'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>juegos</NavLink>
    <h2> amigos </h2>
    

  </div>
)

export default Friends; 