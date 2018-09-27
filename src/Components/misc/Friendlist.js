import React, { Component } from 'react';

const amigos = [{nombre: 'Alicia Bárcena', foto: "https://image.flaticon.com/icons/svg/53/53129.svg"
}, {nombre: 'Héctor Abad', foto: 'https://image.flaticon.com/icons/svg/53/53060.svg'
}, {nombre: 'Alberto Acosta', foto: 'https://image.flaticon.com/icons/svg/53/53104.svg'
}, {nombre: 'Lourdes Casanova', foto: 'https://image.flaticon.com/icons/svg/53/53101.svg'
}, {nombre: 'Manuel Alcántara', foto: 'https://image.flaticon.com/icons/svg/53/53106.svg'
}, {nombre: 'Christina Figueres', foto: 'https://image.flaticon.com/icons/svg/53/53176.svg'
}, {nombre: 'Jorge Mario', foto: 'https://image.flaticon.com/icons/svg/53/53157.svg'
}];

class Friendlist extends Component {
    render(){
        return(
            <div className="containerFriends">
                {amigos.map((e, i) => {
                    let num = i + 1; // esto genera el id de las fotos de los amigos
                    return (
                        <div className="card blue-grey darken-1" key={num}>
                            <p className="friendName"> {`${e.nombre}`}</p>
                            <img className="foto" src={e.foto} width="100px" height="100px" alt={e.nombre}/>
                        </div>
                    )
                })}
  
            </div>
        )
    }
  }
  
  export default Friendlist;