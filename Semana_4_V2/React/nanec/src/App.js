//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ItemRestaurante from './Componentes/ItemRestaurante';
import axios from 'axios';
//Codigo Principal
function App () {
  const agregarRestaurante = () => {
    setRestaurantes(prevState => [...prevState, { nombre: "Nuevo Restaurante", tipo: "Tipo de comida", horario: "00:00 - 00:00", imagen: "" }]);
  };
//restaurantes es la variable de estado y set restaurante es la funcion cuando se actuliza el estado
  /*const [restaurantes, setRestaurantes] = useState([
    { nombre: "Restaurante El Buen Sabor", tipo: "Tradicional", horario: "12:00 - 22:00", imagen:"https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2012/01/comida-rapida-casera.jpg" },
    { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00", imagen:"https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2012/01/comida-rapida-casera.jpg" },
    { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00", imagen: "https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2012/01/comida-rapida-casera.jpg"},
    { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00", imagen: "https://s2.abcstatics.com/abc/sevilla/media/gurmesevilla/2012/01/comida-rapida-casera.jpg"}
  ]);*/

  
  const [restaurantes, setRestaurantes] = useState([]);

  const cargarRestaurante= () => {
    axios.get("http://localhost:3001/restaurantes")
    .then((response) => {console.log("Respuesta Exitosa ",response)
      setRestaurantes(response.data);
    })
    .catch((error) => {console.log("Respuesta Fallida ",error);});
  }


    return (
      <div className="App">
        <h1>Bienvenidos a ñanEC</h1>
        {restaurantes.map((rest, index) => (<ItemRestaurante key={index} nombre={rest.nombre} tipo={rest.tipo} horario={rest.horario} imagen={rest.imagen}></ItemRestaurante>))}
        {/*<button onClick={agregarRestaurante}>Agregar</button>*/}
        <button onClick={cargarRestaurante}>Cargar</button>
      </div>
    );
  
}
export default App;
