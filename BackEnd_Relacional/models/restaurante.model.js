const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');

const Restaurante = sequelize.define('Restaurante', {
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
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Tipo is requiered" }
        }
    },
    horario: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Horario is requiered" }
        }
    },
    imagen: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: "Imagen is requiered" }
        }
    },
    reputacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: { msg: "Reputacion is requiered" }
        }
    }
});

module.exports = Restaurante;
