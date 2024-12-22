import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registro = () => {
    const [correo, setCorreo] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [confirmarContrasena, setConfirmarContrasena] = useState("");
    const [errores, setErrores] = useState({});
    const [mensaje, setMensaje] = useState(null);
    const navigate = useNavigate();

    const validarFormulario = (campo, valor) => {
        const nuevosErrores = { ...errores };

        if (campo === "correo") {
            if (!valor) {
                nuevosErrores.correo = "El correo es obligatorio.";
            } else {
                delete nuevosErrores.correo;
            }
        }

        if (campo === "contrasena") {
            if (!valor) {
                nuevosErrores.contrasena = "La contraseña es obligatoria.";
            } else {
                delete nuevosErrores.contrasena;
            }
        }

        if (campo === "confirmarContrasena") {
            if (valor !== contrasena) {
                nuevosErrores.confirmarContrasena = "Las contraseñas no coinciden.";
            } else {
                delete nuevosErrores.confirmarContrasena;
            }
        }

        setErrores(nuevosErrores);
    };

    const handleRegistro = (e) => {
        e.preventDefault();

        if (Object.keys(errores).length > 0 || !correo || !contrasena || contrasena !== confirmarContrasena) {
            setMensaje({ tipo: "error", texto: "Debe ingresar los datos necesarios." });
            return;
        }

        axios.post("http://172.31.45.35:8000/register", {
            email: correo,
            password: contrasena
        })
        .then((response) => {
        console.log("Registro exitoso ", response);
        setMensaje({ tipo: "exito", texto: "Registro exitoso. Redirigiendo al login..." });
        setTimeout(() => navigate("/"), 3000); // Redirigir después de 3 segundos
        })
        .catch((error) => {
        console.log("Registro fallido ", error);
        setMensaje({ tipo: "error", texto: "Error al registrarse. Inténtalo nuevamente." });
        });
    };

    return (
        <div className="card">
            {mensaje && (
                <div
                    style={{
                        padding: "10px",
                        backgroundColor: mensaje.tipo === "error" ? "#f8d7da" : "#d1e7dd",
                        color: mensaje.tipo === "error" ? "#842029" : "#0f5132",
                        border: `1px solid ${mensaje.tipo === "error" ? "#f5c2c7" : "#badbcc"}`,
                        borderRadius: "5px",
                        marginBottom: "15px",
                        textAlign: "center",
                    }}
                >
                    {mensaje.texto}
                </div>
            )}
            <form className="formulario" onSubmit={handleRegistro}>
                <h1>Registro</h1>
                <div>
                    <label>Correo:</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={correo}
                        onChange={(e) => {
                            setCorreo(e.target.value);
                            validarFormulario("correo", e.target.value);
                        }}
                    />
                    {errores.correo && <p style={{ color: "red", fontSize: "14px" }}>{errores.correo}</p>}
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        value={contrasena}
                        onChange={(e) => {
                            setContrasena(e.target.value);
                            validarFormulario("contrasena", e.target.value);
                        }}
                    />
                    {errores.contrasena && <p style={{ color: "red", fontSize: "14px" }}>{errores.contrasena}</p>}
                </div>
                <div>
                    <label>Confirmar contraseña:</label>
                    <input
                        type="password"
                        id="confirmar-contrasena"
                        name="confirmar-contrasena"
                        value={confirmarContrasena}
                        onChange={(e) => {
                            setConfirmarContrasena(e.target.value);
                            validarFormulario("confirmarContrasena", e.target.value);
                        }}
                    />
                    {errores.confirmarContrasena && (
                        <p style={{ color: "red", fontSize: "14px" }}>{errores.confirmarContrasena}</p>
                    )}
                </div>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Registro;
