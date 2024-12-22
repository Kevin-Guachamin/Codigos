const RestauranteController = require('../controllers/restaurante.controller');

module.exports = function (app) {
    app.post('/restaurantes', RestauranteController.createRestaurante);
    app.get('/restaurantes', RestauranteController.getAllRestaurante);
    app.get('/restaurantes/:id', RestauranteController.getRestaurante);
    app.put('/restaurantes/:id/',RestauranteController.updateRestaurante);
    app.delete('/restaurantes/:id',RestauranteController.deleteRestaurante);
}