import React, { Component } from 'react';
import firebase from 'firebase';


class RegisterWithFirebase extends Component {

  constructor() {
    super();

    this.state = {

      user: null
    };

    this.registerWithFirebase = this.registerWithFirebase.bind(this);

  }
  //Registro
  registerWithFirebase() {
    const emailValue = document.getElementById('emailR').value;
    const passwordValue = document.getElementById('passwordR').value;
    const nameValue = document.getElementById("name").value;

    firebase.auth().createUserWithEmailAndPassword(emailValue, passwordValue)
      .then((userData) => {
        firebase.database().ref(`usuarios/${userData.user.uid}`).set({

          emailValue: userData.user.email,
          uid: userData.user.uid,
        });

        alert("Registro con exito")
        //window.location="index.html"

      })

      .then((result) => {
        console.log("Usuario creado con éxito");
        let user = firebase.auth().currentUser;
        user.updateProfile({ displayName: nameValue })
          .then(() => {
            localStorage.setItem("user", JSON.stringify(user));
          })
          .catch((error) => {
            console.log(error)
          })
      })


      .catch((error) => {
        console.log("Error de Firebase > Codigo > " + error.code);
        console.log("Error de Firebase > Mensaje > " + error.message);

      });
  }

  renderRegisterButton() {
    // si el usuario está logueado
    if (this.state.user) {
      return (
        <div>
        </div>
      );
    } else {
      return (
        // si no está logueado
        <div className="signForm">
          <form action="" className="white" >
            <input type='text' id='name' placeholder='nombre' />
            <input type='email' id='emailR' placeholder='email' />
            <input type='password' id='passwordR' placeholder='Contraseña' />
          </form>
          <button className="btn teal darken-1 " onClick={this.registerWithFirebase}>Registrar</button>
        </div>
      );
    }
  }

  // display users in my template
  render() {
    return (
      <div className="App">
        {this.renderRegisterButton()}
      </div>
    );
  }
}

export default RegisterWithFirebase;