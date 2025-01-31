import React, { useEffect } from 'react';
import ItemRestaurante from './ItemRestaurante';
import 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function ListaRestaurantes({ restaurantes, onRecargar }) {

  const navigate = useNavigate();

  useEffect(() => {
    onRecargar();
  }, [onRecargar]);

  return (

    <div>
      <div><button onClick={() => {
        localStorage.removeItem('token'); // Elimina el token del almacenamiento local
        window.location.href = "/"; // Redirige al inicio
      }} class="Salir">Salir</button></div>
      <button onClick={() => navigate('/Form')}>Agregar</button>
      <Link to="/Form">Nuevo</Link>
      {restaurantes.map((rest, index) => (
        <ItemRestaurante
          key={index}
          id={rest._id}
          nombre={rest.nombre}
          tipo={rest.tipo}
          horario={rest.horario}
          imagen={rest.imagen}
          reputacion={rest.reputacion}
        />
      ))}
    </div>
  );
}

export default ListaRestaurantes;