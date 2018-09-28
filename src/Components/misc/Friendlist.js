import React, { Component } from 'react';

const amigos = [{nombre: 'Alicia Bárcena', foto: "https://randomuser.me/api/portraits/women/7.jpg"
}, {nombre: 'Héctor Abad', foto: 'https://randomuser.me/api/portraits/men/19.jpg'
}, {nombre: 'Alberto Acosta', foto: 'https://randomuser.me/api/portraits/men/41.jpg'
}, {nombre: 'Lourdes Casanova', foto: 'https://randomuser.me/api/portraits/women/41.jpg'
}, {nombre: 'Manuel Alcántara', foto: 'https://randomuser.me/api/portraits/men/60.jpg'
}, {nombre: 'Christina Figueres', foto: 'https://randomuser.me/api/portraits/women/34.jpg'
}, {nombre: 'Jorge Mario', foto: 'https://randomuser.me/api/portraits/men/20.jpg'
}];

class Friendlist extends Component {
    render(){
        return(
            <div>
                {amigos.map((e, i) => {
                    let num = i + 1; // esto genera el id de las fotos de los amigos
                    return (
                        <div>
                        <div className="card white friendCard" key={num}>
                        <li className="hrz"><img className="avatar" src={e.foto} width="60px" height="60px" alt={e.nombre}
                        /></li>
                         <li className="hrz"> {`${e.nombre}`}</li>
                        </div>
                        </div>
                    )
                })}
            </div>
        )
    }
  }
  
  export default Friendlist;