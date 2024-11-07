import React from 'react';

class ItemRestaurante extends React.Component {
    render() {
        const{nombre, tipo, horario, imagen}=this.props;
        return (
            <div className="card">
                <h3>{nombre}</h3>
                <p>{"Tipo de comida: " + tipo}</p>
                <p>{"Horario: " + horario}</p>
                <img src={imagen} alt="" />
            </div>
        );
    }
}

export default ItemRestaurante;
