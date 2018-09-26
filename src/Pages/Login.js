import React from 'react';
import AuthWhithGoogle from '../Components/AuthWhithGoogle';
import AuthWithEmailAndPassword from '../Components/AuthWithEmailAndPassword';

 
const Login = () => (
  <div>
    <h1>holo soy login</h1>
    <AuthWhithGoogle />
            <AuthWithEmailAndPassword />
  </div>
)

export default Login; 