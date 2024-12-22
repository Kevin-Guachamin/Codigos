import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const ItemRestaurante =  ({id, nombre, tipo, horario, imagen, reputacion}) => {

    const handleEliminarRestaurante = (e) => {
        e.preventDefault();

        axios.delete(`http://localhost:8000/restaurantes/${id}`)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error("Error al obtener el restaurante:", error);
        });
    };
    
        //const{nombre, tipo, horario, imagen}=props;
        return (
            <div className="card">
                <h3>{nombre}</h3>
                <p>{"Tipo de comida: " + tipo}</p>
                <p>{"Horario: " + horario}</p>
                <img src={imagen} alt="" />
                <p>{"Reputación: "+ reputacion}</p>
                <Link to={`/restaurantes/${id}`}>Detalle</Link>
                <button onClick={handleEliminarRestaurante}>Eliminar</button>
            </div>
        );
}

export default ItemRestaurante;