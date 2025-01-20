import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListaRestaurantes from './componentes/ListaRestaurante';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {

  const [restaurantes, setRestaurantes] = useState([]);

  const cargarRestaurantes = () => {
    axios.get("http://172.29.1.184:8000/restaurantes")
    .then((response) => {
      setRestaurantes(response.data);
    })
    .catch ((error) => {
      console.log("No se puede cargar los restaurantes",  error)
    })
  }

  useEffect(() => {
    cargarRestaurantes();
  }, [restaurantes.id]);

  return (
    <View style={styles.container}>
      <ListaRestaurantes restaurantes={restaurantes} onRecargar={cargarRestaurantes}></ListaRestaurantes>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});