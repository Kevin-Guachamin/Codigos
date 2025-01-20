const MenuController = require('../controllers/menu.controller');

module.exports = function(app){
    app.post('/menu', MenuController.createMenu);
    app.post('/plato', MenuController.createPlato);
    app.get('/menu/:restauranteId', MenuController.getPlatoRestaurante);
}