import React from 'react';
import RegisterWithFirebase from '../Components/RegisterWithFirebase'
import AuthWithGoogle from '../Components/AuthWhithGoogle'
import logo from './logo.png';

const Register = () => (

  <div class="container">
    <div className="row">
      <div className="col s12 m4 offset-m4">
        <div className="card white">
           <img src={logo} className="logoSign" alt="logo" height="175" />
           <h5 className="center-align">Registro</h5>
          <RegisterWithFirebase />
          <AuthWithGoogle />
        </div>
      </div>
    </div>
  </div>

)

export default Register; 