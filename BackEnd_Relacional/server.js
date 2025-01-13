const express = require('express'); //require --> Importar un módulo

const cors = require('cors');
const app = express(); //Permite configurar al servidor web

const port = 8000;

//Con el .use se definen los midleware
app.use(cors());
app.use(express.json()); //Sirve para convertir un json en un objeto de JavaScript
app.use(express.urlencoded({ extended: true }));

require('./config/sequelize.config');

const allRestaurantesRoutes = require('./routes/restaurante.routes');
allRestaurantesRoutes(app);

app.listen(port, () => {
    console.log("Server listening at port", port);
});