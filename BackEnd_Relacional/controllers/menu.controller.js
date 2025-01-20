const Menu = require('../models/menu.model');
const Restaurante =  require('../models/restaurante.model');
const Plato = require('../models/plato.model');

//Controlador para crear un menú

module.exports.createMenu = async (req, res) => {
    try{
        const {menuFecha, RestauranteId, PlatoId} = req.body;
        const menu = await Menu.create({menuFecha, RestauranteId, PlatoId});
        res.json(menu);
    } catch (err){
        res.status(500).json({msg: "Ocurrió un error al crear el menú"});
    }
}


module.exports.createPlato = async (req, res) => {
    try{
        const {nombre} = req.body;
        const plato = await Plato.create({nombre});
        res.json(plato);
    } catch (err){
        res.status(500).json({msg: "Ocurrió un error al crear el plato"});
    }
}

module.exports.getPlatoRestaurante = async (req, res) => {
    try{
        const menus = await Menu.findAll({
            where: { RestauranteId: req.params.restauranteId },
            include: [Plato]
        });
        res.json(menus);
    } catch (err){
        res.status(500).json( { msg: "Ocurrió un error al obtener los platos del restaurante" } )
    }
}