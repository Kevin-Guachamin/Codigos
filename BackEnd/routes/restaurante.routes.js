const RestauranteController = require('../controllers/restaurante.controller');
const { protect } = require('../middleware/protect');
const { admin } = require('../middleware/protect');

module.exports = function (app) {
    app.post('/restaurantes',admin, RestauranteController.createRestaurante);
    app.get('/restaurantes',protect, RestauranteController.getAllRestaurante);
    app.get('/restaurantes/:id', RestauranteController.getRestaurante);
    app.put('/restaurantes/:id/',admin,RestauranteController.updateRestaurante);
    app.delete('/restaurantes/:id',admin,RestauranteController.deleteRestaurante);
}