const Restaurante = require('../models/restaurante.model');

module.exports.createRestaurnate = async (request, response) => {
    const { nombre, tipo, horario, imagen, reputacion } = request.body;
    try{
        const restaurante = await Restaurante.create({ nombre, tipo, horario, imagen, reputacion });
        response.json(restaurante);
    } catch (err){
        response.status(500).json({ message: "No se pudo crear el restaurante" });
    }
};

module.exports.getAllRestaurantes = async (_, response) => {
    try {
        const restaurantes = await Restaurante.findAll();
        response.json(restaurantes);
    } catch (err) {
        response.status(500).json(err);
    }
};

module.exports.getRestaurante = async (request, response) => {
    try {
        const user = await Restaurante.findOne({ where: { id: request.params.id } }); response.json(user);
    } catch (err) {
        response.status(500).json(err);
    }
};

module.exports.updateRestaurante = async (request, response) => {
    try {
        // Se actualiza el restaurante
        const [updatedRowCount] = await Restaurante.update(request.body, {
            where: { id: request.params.id }
        });
        // Se verifica si se ha actualizado algún registro
        if (updatedRowCount) {
            // Recupera la información actualizada del restaurante
            const updatedRestaurante = await Restaurante.findOne({ where: { id: request.params.id } }); response.json(updatedRestaurante);
        } else {
            response.status(404).json({ message: "Restaurante no encontrado" });
        }
    } catch (err) {
        response.status(500).json(err);
    }
};


module.exports.deleteRestaurante = async (request, response) => {
    try {
        const restaurante = await Restaurante.findOne({ where: { id: request.params.id } }); if (!restaurante) {
            return response.status(404).json({ message: "Restaurante no encontrado" });
        }
        await Restaurante.destroy({ where: { id: request.params.id } });
        response.json(restaurante);
    } catch (err) {
        response.status(500).json(err);
    }
};
