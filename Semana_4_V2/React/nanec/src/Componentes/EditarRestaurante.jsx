import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditarRestaurante.css";

const EditarRestaurante = () => {
    const [restaurante, setRestaurante] = useState({
        nombre: "",
        tipo: "",
        horario: "",
        imagen: "",
        reputacion: ""
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/restaurantes/${id}`)
            .then((response) => {
                setRestaurante(response.data);
            })
            .catch((error) => {
                console.error("Error al obtener el restaurante:", error);
            });
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRestaurante((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`http://localhost:8000/restaurantes/${id}`, restaurante)
            .then(() => {
                navigate("/restaurantes");
            })
            .catch((error) => {
                console.error("Error al actualizar el restaurante:", error);
            });
    };

    return (
        <div>
            <div className="editar-restaurante">
                <h1>Editar Restaurante</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Nombre: </label>
                        <input
                            type="text"
                            name="nombre"
                            value={restaurante.nombre}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Tipo de Comida: </label>
                        <input
                            type="text"
                            name="tipo"
                            value={restaurante.tipo}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Horario: </label>
                        <input
                            type="text"
                            name="horario"
                            value={restaurante.horario}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Imagen (URL): </label>
                        <input
                            type="text"
                            name="imagen"
                            value={restaurante.imagen}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label>Reputación: </label>
                        <input
                            type="number"
                            name="reputacion"
                            value={restaurante.reputacion}
                            onChange={handleInputChange}
                        />
                    </div>
                    
                        <button type="submit">Guardar</button>
                    
                </form>
            </div>
        </div>
    );
};

export default EditarRestaurante;