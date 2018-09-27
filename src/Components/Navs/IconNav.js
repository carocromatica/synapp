import React from 'react'
import { NavLink } from "react-router-dom";

const IconNav = () => {
  return (
    <div className="card white">
      <div className="row">
        <div className="col s3 center-align">
          <div>
            <NavLink to='/home'> <i className="navIcons fas fa-home blue-grey-text darken-4"></i></NavLink>
          </div>
          <div>
            <NavLink to='/home'>Inicio</NavLink>
          </div>
        </div>
        <div className="col s3 center-align">
          <div>
            <NavLink to='/friends'> <i className="navIcons fas fa-user-friends blue-grey-text darken-4"></i></NavLink>
          </div>
          <div>
            <NavLink to='/friends'>Amigos</NavLink>
          </div>
        </div>
        <div className="col s3 center-align">
          <div>
            <NavLink to='/events'> <i className="navIcons fas fa-calendar-alt blue-grey-text darken-4"></i></NavLink>
            </div>
          <div>
            <NavLink to='/events'>Eventos</NavLink>
          </div>
        </div>
        <div className="col s3 center-align">
        <div>
          <NavLink to='/games'> <i className="navIcons fas fa-trophy blue-grey-text darken-4"></i></NavLink>
          </div>
          <div>
          <NavLink to='/games'>Desafíos</NavLink>
        </div>
      </div>
    </div>
    </div>
  )
}
export default (IconNav) 