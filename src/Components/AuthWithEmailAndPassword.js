import React, { Component } from 'react';
import  firebase from 'firebase';




class AuthWithEmailAndPassword extends Component {

constructor() { 
  super();

  this.state = {  

    user: null
  };   

  this.handleAuthWithEmailAndPassword = this.handleAuthWithEmailAndPassword.bind(this);
 
}

  handleAuthWithEmailAndPassword () {
    const emailValue = document.getElementById('email').value;
  const passwordValue = document.getElementById('password').value;
  

    firebase.auth().signInWithEmailAndPassword(emailValue, passwordValue)
    .then(() => {
        let user = firebase.auth().currentUser;
        localStorage.setItem("user", JSON.stringify(user));
        console.log("Usuario inició sesión con éxito");
    })
        .catch(error => console.log(`error ${error.code}: ${error.message}`));
}

renderLoginButtonE () {
  // si el usuario está logueado
  if (this.state.user) {
      return (
          <div>
              <img width='100' src={this.state.user.photoURL} alt={this.state.user.displayName}/>
              <p>Hola holi {this.state.user.displayName}!</p>
              <p>Hola holi {this.state.user.emailValue}!</p>


             

          </div>

      );
  }else{
      return(
      // si no está logueado
      <div>
          <form action="" className="white" >
      <input type='email' id='email' placeholder='email'/>
        <input type='password' id='password' placeholder='password'/>
        
        </form>
        <button className="btn pink lighten-1 z-depth-0" onClick={this.handleAuthWithEmailAndPassword}>Ingresar</button>
      </div>
      );
  }
}

// display users in my template
  render() {
    return (
      <div className="App">
          <h4>Login con email y contraseña</h4>
        {this.renderLoginButtonE()}
      </div>
    );
  }
}

export default AuthWithEmailAndPassword;
