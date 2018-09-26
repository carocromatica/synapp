import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom'; // tengo entendido que simula una navegacion html5


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* AGREGAR COMPONENTES AQUI  */}
       <BrowserRouter>
        <h1>
         Cuarto DEPLOY holi holi jjjj
        </h1>
        </BrowserRouter>
        {/* FIN COMPONENTES */}
      </div>
    );
  }
}

export default App;
