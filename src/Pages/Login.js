import React from 'react';
import AuthWhithGoogle from '../Components/AuthWhithGoogle';
import AuthWithEmailAndPassword from '../Components/AuthWithEmailAndPassword';

const Login = () => (
  <div className="row">
    <div className="">
      <h5 className="center-align">Iniciar Sesión</h5>
      <AuthWithEmailAndPassword />
      <AuthWhithGoogle />
    </div>
  </div>
)
export default Login; 