import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ItemRestaurante = ({ id, nombre, tipo, horario, imagen, reputacion }) => {

    //const{nombre, tipo, horario, imagen}=props;
    return (
        <View >
            <Text>{"ID: " + id}</Text>
            <Text>{"Nombre: " + nombre}</Text>
            <Text>{"Tipo de comida: " + tipo}</Text>
            <Text>{"Horario: " + horario}</Text>
            <Image source={{ uri: imagen }} style={styles.image}/>                
            <Text>{"Reputación: " + reputacion}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginBottom: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    image: {
        width: 200, // Puedes ajustar las dimensiones según sea necesario
        height: 200,
        borderRadius: 10,
        marginVertical: 10,
    },
});


export default ItemRestaurante;