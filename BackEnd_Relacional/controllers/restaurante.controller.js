const Restaurante = require('../models/restaurante.model');

module.exports.createRestaurante = async (request, response) => {
    const { nombre, tipo, horario, imagen, reputacion } = request.body;
        try{
            const newRestaurante = await Restaurante.create({ nombre, tipo, horario, imagen, reputacion });
            response.json(newRestaurante);
        }
        catch(err){
            response.status(500).json({message: 'No se pudo crear el usuario'});        }
}

module.exports.getAllRestaurante = async (_, response) => {
    try{
        const allRestaurante = await Restaurante.findAll();
        response.json(allRestaurante);
    }
    catch(err){
        response.status(500).json({message: 'No se pudo obtener los restaurantes'});
    }
}

module.exports.getRestaurante = async (request, response) => {
    try{
        const restaurante = await Restaurante.findOne({where: {id: request.params.id}});
        response.json(restaurante);
    }
    catch(err){
        response.status(500).json({message: 'No se pudo obtener el restaurante'});
    }
}

module.exports.updateRestaurante = async (request, response) => {
    try{
        const [updated] = await Restaurante.update(request.body, {
            where: {id: request.params.id}
        });
        if(updated){
            const updatedRestaurante = await Restaurante.findOne({where: {id: request.params.id}});
            response.json(updatedRestaurante);
        }
        else{
            response.status(404).json({message: 'No se pudo actualizar el restaurante'});
        }
    }
    catch(err){
        response.status(500).json(err);
    }
}

module.exports.deleteRestaurante = async (request, response) => {
    try{
        const restaurante = await Restaurante.findOne({where: {id: request.params.id}});
        if(!restaurante){
          return response.status(404).json({message: 'No se pudo encontrar el restaurante'});
        }
        await Restaurante.destroy({where: {id: request.params.id}});
        response.json(restaurante);
    }catch(err){
        response.status(500).json(err); 
    }
}