import React from 'react';
import RegisterWithFirebase from '../Components/RegisterWithFirebase'
import AuthWithGoogle from '../Components/AuthWhithGoogle'


const Register = () => (

  
    <div className="row">
      <div className="">
           <h5 className="center-align">Registro</h5>
          <RegisterWithFirebase />
          <AuthWithGoogle />
        </div>
      </div>
   
 

)

export default Register; 