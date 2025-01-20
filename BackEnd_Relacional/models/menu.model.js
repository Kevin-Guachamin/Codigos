const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize.config');
const Restaurante = require('./restaurante.model');
const Plato =  require('./plato.model');

const Menu = sequelize.define('Menu', {
    menuFecha: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
});

//Definición de muchos a muchos
Restaurante.belongsToMany(Plato, {through: Menu});
Plato.belongsToMany(Restaurante, {through: Menu});

Menu.belongsTo(Restaurante, {foreignKey: 'RestauranteId'});
Menu.belongsTo(Plato, {foreignKey: 'PlatoId'});

module.exports = Menu;