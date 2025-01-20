import React from 'react';
import ItemRestaurante from './ItemRestaurante';
import { View} from 'react-native';

function ListaRestaurantes({ restaurantes, }) {

  
  return (

    <View>
      {restaurantes.map((rest, index) => (
        <ItemRestaurante
          key={index}
          id={rest.id}
          nombre={rest.nombre}
          tipo={rest.tipo}
          horario={rest.horario}
          imagen={rest.imagen}
          reputacion={rest.reputacion}
        />
      ))}
    </View>
  );
}

export default ListaRestaurantes;