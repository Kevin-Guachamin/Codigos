const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const Plato = sequelize.define('Plato', {
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notNull: {msg: "El nombre es requerido"}
        }
    }
});

module.exports = Plato;