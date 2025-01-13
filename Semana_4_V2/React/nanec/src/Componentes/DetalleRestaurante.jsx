import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetalleRestaurante = () => {
    const [restaurante, setRestaurante] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/restaurantes/${id}`)
            .then((response) => {
                console.log("Datos del servidor:", response.data);
                setRestaurante(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener los detalles del restaurante:", error);
            });
    }, [id]);

    const { nombre, tipo, horario, imagen } = restaurante;

    return (
        <div>
            <h3>{nombre}</h3>
            <p>{`Tipo de comida: ${tipo}`}</p>
            <p>{`Horario: ${horario}`}</p>
            {imagen && <img src={imagen} alt={nombre} />}
            <p>{`Reputación: ${restaurante.reputacion}`}</p>            <div>
            <button onClick={() => navigate(`/editar/${id}`)}>Editar</button>
            </div>
        </div>
    );
};

export default DetalleRestaurante;