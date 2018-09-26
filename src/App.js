import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom'; // tengo entendido que simula una navegacion html5
import NavBar from './Components/navbars/NavBar'


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* AGREGAR COMPONENTES AQUI  */}
       <div>
       <BrowserRouter>
      
        <div>
   <NavBar />
   </div>
        </BrowserRouter>
</div>
        <div>
        <h1>
         sexto DEPLOY holi holi jjjj
        </h1>
        </div>
        {/* FIN COMPONENTES */}
      </div>
    );
  }
}

export default App;
