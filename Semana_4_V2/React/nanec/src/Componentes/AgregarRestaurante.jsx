import React, {useState} from "react";
import "./AgregarRestaurante.css";
import axios from "axios";
import { useNavigate} from "react-router-dom";


const AgregarRestaurante = (props) => {

    const {onAgregarRestaurante}=props;
    const navigate = useNavigate();

    const [datosFormRestaurante, setDatosFormRestaurante] = useState({
        id: "",
        nombre: "",
        tipo: "",
        horario: "",
        imagen: ""
    });

    const handleAgregarRestaurante = (e) => {
        e.preventDefault();
        console.log(e.target);
        const {name, value} = e.target;
        setDatosFormRestaurante({...datosFormRestaurante, [name]: value});
    }

    const handleAgregarSubmitRestaurante = (e) => {
        e.preventDefault();
        axios.post("http://172.31.45.35:8000/restaurantes", datosFormRestaurante)
        .then((response) => {console.log("Respuesta Exitosa ",response);
        setDatosFormRestaurante({
            id: "",
            nombre: "",
            tipo: "",
            horario: "",
            imagen: "",
            reputacion: ""
        },
        navigate("/restaurantes"));
        onAgregarRestaurante(datosFormRestaurante);
        })
        .catch((error) => {console.log("Respuesta Fallida ",error);});
    }

    return (
        <div className="card">
            <form action="" class="formulario" onSubmit={handleAgregarSubmitRestaurante}>
                <h1>Agregar Restaurante</h1>
                <div>
                    <label>Nombre:</label>
                    <input type="text" id="nombre" name="nombre" value={datosFormRestaurante.nombre} onChange={handleAgregarRestaurante}></input>
                </div>
                <div>
                    <label>Tipo de comida:</label>
                    <input type="text" id="tipo" name="tipo" value={datosFormRestaurante.tipo} onChange={handleAgregarRestaurante}></input>
                </div>
                <div>
                    <label>Horario:</label>
                    <input type="text" id="horario" name="horario" value={datosFormRestaurante.horario} onChange={handleAgregarRestaurante}></input>
                </div>
                <div>
                    <label>Imagen:</label>
                    <input type="text" id="imagen" name="imagen" value={datosFormRestaurante.imagen} onChange={handleAgregarRestaurante}></input>
                </div>
                <div>
                    <label>Reputación:</label>
                    <input type="number" id="reputacion" name="reputacion" value={datosFormRestaurante.reputacion} onChange={handleAgregarRestaurante}></input>
                </div>
                <button type="submit">Agregar</button>
            </form>
        </div >
    );



}

export default AgregarRestaurante;