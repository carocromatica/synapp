import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect,Switch } from "react-router-dom";
import Home from './Pages/Home';
import Friends from './Pages/Friends';
import Register from './Pages/Register'
import Login from './Pages/Login'
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

  this.handleLogout = this.handleLogout.bind(this);
  this.renderLoginButton = this.renderLoginButton.bind(this);
 }
 componentWillMount () {
  firebase.auth().onAuthStateChanged(user => {
      this.setState({user});
  });

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

          <div>

 <Router>
        <div className="App">
          <Switch>
           
            <Route path='/friends' component={Friends} />
            <Route path="/home" component={Home} />
          </Switch>
        </div>
      </Router>

</div>
          <Router>
            <div>
              <Redirect to="/home" className="link">Profile</Redirect>
            
            </div>
          </Router>
        </div>
      );
  }else{
      return(
      // si no está logueado
      <div>
        <div>
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