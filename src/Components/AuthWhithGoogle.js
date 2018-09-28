import React, { Component } from 'react';
import  firebase from 'firebase';


class AuthWithGoogle extends Component {

constructor() { 
  super();

  this.state = {  

    user: null
  };   

  this.handleAuthWithGoogle = this.handleAuthWithGoogle.bind(this);

}

  handleAuthWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`error ${error.code}: ${error.message}`));

}

renderLoginButtonG () {
  // si el usuario está logueado
  if (this.state.user) {
      return (
          <div>
          </div>
      );
  }else{
      return(
      // si no está logueado
      <div className="signForm">
      <button className="btn red darken-1" onClick={this.handleAuthWithGoogle}>Login con Google</button>
      </div>
      );
  }
}

// display users in my template
  render() {
    return (
      <div className="App">
        {this.renderLoginButtonG()}
      </div>
    );
  }
}

export default AuthWithGoogle;
