import React from 'react'
import {  NavLink, } from "react-router-dom";

const IconNav = () => {
  return (
    

    <div>

<NavLink to='/home'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>Inicio</NavLink>
       <NavLink to='/friends'> <i className="far fa-calendar-alt blue-text text-darken-2"></i>amigos</NavLink>
    
     
    </div>

  )
}

export default (IconNav)