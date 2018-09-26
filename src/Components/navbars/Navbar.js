import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () =>{

  return(
    <nav ClassName="nav-wrapper blue-grey darken-4">
      <div ClassName="container">
      <Link to='/'>soy un link</Link>
      </div>
    </nav>
  )
}

export default NavBar;