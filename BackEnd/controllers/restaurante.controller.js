const Restaurante = require('../models/restaurante.model');

module.exports.createRestaurante = (request, response) => {
    const { nombre, tipo, horario, imagen, reputacion } = request.body;
    Restaurante.create({
        nombre, tipo, horario, imagen, reputacion
    })
        .then(Restaurante => response.json(Restaurante))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllRestaurante = (_, response) => {
    Restaurante.find({})
        .then(Restaurante => response.json(Restaurante))
        .catch(err => response.json(err))
}

module.exports.getRestaurante = (request, response) => {
    Restaurante.findOne({ _id: request.params.id })
        .then(Restaurante => response.json(Restaurante))
        .catch(err => response.json(err))
}

module.exports.updateRestaurante = (request, response) => {
    Restaurante.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
    .then(updatedRestaurante => response.json(updatedRestaurante))
    .catch(err => response.json(err))
}

module.exports.deleteRestaurante = (request, response) => {
    Restaurante.findByIdAndDelete(request.params.id)
    .then(restauranteDeleted => response.json(restauranteDeleted))
    .catch(err => response.json(err))
}