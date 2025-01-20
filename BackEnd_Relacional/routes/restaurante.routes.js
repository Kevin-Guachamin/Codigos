const RestauranteController = require('../controllers/restaurante.controller');

module.exports = function (app) {
    app.post('/restaurantes', RestauranteController.createRestaurnate);
    app.get('/restaurantes', RestauranteController.getAllRestaurantes);
    app.put('/restaurantes/:id', RestauranteController.updateRestaurante);
    app.delete('/restaurantes/:id', RestauranteController.deleteRestaurante);
};