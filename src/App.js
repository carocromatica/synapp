import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Home from './Pages/Home';
import Friends from './Pages/Friends';
import Events from './Pages/Events';
import Games from './Pages/Games';
import Register from './Pages/Register'
import Login from './Pages/Login'
import LogoMini from './Components/Logo/Logo'
import firebase from 'firebase/app'
import logo from './Pages/logo.png'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'
import '../src/style.css'

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
  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    });
  }
  handleAuthWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`error ${error.code}: ${error.message}`));
  }
  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha salido`))
      .catch(error => console.log(`error ${error.code}: ${error.message}`));
  }
  renderLoginButton() {
    // si el usuario está logueado
    if (this.state.user) {
      return (
        <div>
          <div className="nav-wrapper blue-grey darken-4">
            <div className="container">
              <LogoMini />
              <div class="right">
                <li className="hrz userNav"><img width='35' className="avatar" src={this.state.user.photoURL} alt={this.state.user.displayName} /> </li>
                <li className="hrz userNav">{this.state.user.displayName}</li>
                <li className="hrz"><button onClick={this.handleLogout}>Salir</button></li>
              </div>
            </div>
          </div>
          <Router>
            <div>
              <Route path="/home" component={Home} />
              <Route path='/friends' component={Friends} />
              <Route path='/events' component={Events} />
              <Route path='/games' component={Games} />
              <Redirect to="/home" className="link">Profile</Redirect>
            </div>
          </Router>
        </div>
      );
    } else {
      return (
        <div>
          <div class="container">
            <div className="row">
              <div className="col s12 m4 offset-m4">
                <div className="card white">
                  <img src={logo} className="logoSign" alt="logo" height="175" />
          <p>Bienvenido a Synappse, Red Social del conocimiento</p> 
          <Router>
            <div>
              <Link to="/register" className="link">Registro </Link>
              <Link to="/" className="link"> Inicio</Link>
              <Link to="/login" className="link"> Login</Link>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/r" component={App} />
            </div>
          </Router>
        </div>
        </div>
              </div>
            </div>
          </div>
      );
    }
  }
  // display users in my template
  render() {
    return (
      <div className="App">
        {this.state.users}
        {this.renderLoginButton()}
      </div>
    );
  }
}
export default App;