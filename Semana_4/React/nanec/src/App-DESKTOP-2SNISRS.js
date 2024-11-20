//import logo from './logo.svg';
import './App.css';
import React from 'react';
import ItemRestaurante from './Componentes/ItemRestaurante';
//Codigo Principal
function App() {

  const agregarRestaurante = () => {
    setRestaurantes(prevState => ({ restaurantes: [...prevState.restaurantes, { nombre: "Nuevo Restaurante", tipo: "Tipo de comida", horario: "00:00 - 00:00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zXJNyANS8TG8NHjHX4hUdaU_Q6VQSKaMQg&s" }] }));
  }
  const [restaurantes, setRestaurantes] = React.useState([
    { nombre: "Restaurante El Buen Sabor", tipo: "Tradicional", horario: "12:00 - 22:00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zXJNyANS8TG8NHjHX4hUdaU_Q6VQSKaMQg&s" }, 
    { nombre: "Café del Valle", tipo: "Cafetería", horario: "08:00 - 20:00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zXJNyANS8TG8NHjHX4hUdaU_Q6VQSKaMQg&s" }, 
    { nombre: "La Parrilla de San José", tipo: "Parrillada", horario: "12:00 - 23:00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zXJNyANS8TG8NHjHX4hUdaU_Q6VQSKaMQg&s" }, 
    { nombre: "Tortillas tradicionales", tipo: "Tradicinal", horario: "13:00 - 21:00", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9zXJNyANS8TG8NHjHX4hUdaU_Q6VQSKaMQg&s" }
  ]);

  return (
    <div className="App">
      <h1>Bienvenidos a ñanEC</h1>
      {restaurantes.map((rest, index) => (<ItemRestaurante key={index} nombre={rest.nombre} tipo={rest.tipo} horario={rest.horario} imagen={rest.imagen}></ItemRestaurante>))}
      <button onClick={this.agregarRestaurante}>Agregar</button>
    </div>
  );
}
export default App;
