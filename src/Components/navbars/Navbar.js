import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from '../../Components/dashboard/Home'


const NavBar = () =>{

  return(
    <nav ClassName="nav-wrapper blue-grey darken-4">
      <div ClassName="container">
      <Router>
      <Link to='home'>soy un link</Link>
      <Route exact path="/home" component={Home} />
      </Router>
      </div>
    </nav>
  )
}

export default NavBar;