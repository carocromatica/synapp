import React, { Component } from 'react';
import AuthWhithGoogle from './Components/AuthWhithGoogle';
import AuthWithEmailAndPassword from './Components/AuthWithEmailAndPassword';
import RegisterWithFirebase from './Components/RegisterWithFirebase';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from './Pages/Home';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

 class App extends Component {
 constructor() { 
  super();
   this.state = {  
     user: null
  };   
  this.handleAuthWithFacebook = this.handleAuthWithFacebook.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  this.renderLoginButton = this.renderLoginButton.bind(this);
 }
 componentWillMount () {
  firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
  });
}
   handleAuthWithFacebook () {
    const provider = new firebase.auth.FacebookAuthProvider();
     firebase.auth().signInWithPopup(provider)
        .then(result => console.log(`${result.user.email} ha iniciado sesión`))
        .catch(error => console.log(`error ${error.code}: ${error.message}`));
 }
 handleLogout(){
  firebase.auth().signOut()
  .then(result => console.log(`${result.user.email} ha salido`))
  .catch(error => console.log(`error ${error.code}: ${error.message}`));
}
 renderLoginButton () {
  // si el usuario está logueado
  if (this.state.user) {
      return (
        <div>
          <img width='100' src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <p>Hola {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout}>Salir</button>
          <Router>
            <div>
              <Redirect to="/home" className="link">Profile</Redirect>
              <Route path="/home" component={Home} />
            </div>
          </Router>
        </div>
      );
  }else{
      return(
      // si no está logueado
      <div>
            <AuthWhithGoogle />
            <AuthWithEmailAndPassword />
            <RegisterWithFirebase />
      </div>
      );
  }
}
 // display users in my template
  render() {
    return (
      <div className="App">
        
        <h1>{this.state.users}</h1> 
        <div className=''>
        </div>
            <div className=''>
               {this.renderLoginButton()}
            </div>
      </div>
    ); 
  }
}
 export default App;