import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [usuario, setUsuario] = React.useState("");
    const [contrasena, setContrasena] = React.useState("");
    const [error, setError] = React.useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); 
        // Reinicia el mensaje de error
        setError("");

        axios.post("http://172.31.45.35:8000/login", {
            email: usuario,
            password: contrasena
        })
            .then((response) => {
                console.log("Ingreso exitoso ", response);
                navigate("/restaurantes");
            })
            .catch((error) => {
                console.log("Ingreso fallido ", error);
                setError("Usuario o contraseña incorrectos.");
            });
    };

    return (
        <div className="card">
            <form className="formulario" onSubmit={handleLogin}>
                <h1>Login</h1>
                <div>
                    <label>Usuario:</label>
                    <input
                        type="text"
                        id="usuario"
                        name="usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>
                <div>
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        id="contrasena"
                        name="contrasena"
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
                <button type="submit">Ingresar</button>
                <div>
                    <Link to="/registro">Registrarse</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
