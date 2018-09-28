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
              <p>{this.state.user.displayName}!</p>
              <p>{this.state.user.emailValue}!</p>
          </div>

      );
  }else{
      return(
      // si no está logueado
        <div className="signForm">
          <form action="" className="white" >
            <input type='email' id='email' placeholder='email' />
            <input type='password' id='password' placeholder='Contraseña' />
          </form>
          <button className="btn teal darken-1" onClick={this.handleAuthWithEmailAndPassword}>Ingresar</button>
        </div>
      );
  }
}

// display users in my template
  render() {
    return (
      <div className="App">

        {this.renderLoginButtonE()}
      </div>
    );
  }
}

export default AuthWithEmailAndPassword;
