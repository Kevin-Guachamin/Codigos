const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const Plato = sequelize.define('Restaurante', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        validate: {
            notNull: { msg: "Id is requiered" }
        }
    },nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Nombre is requiered" }
        }
    }
});

module.exports = Plato;