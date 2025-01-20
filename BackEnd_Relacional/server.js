const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

require('./config/sequelize.config');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allRestauranteRoutes = require('./routes/restaurante.routes');
allRestauranteRoutes(app);

const AllMenuRoutes = require('./routes/menu.routes');
AllMenuRoutes(app);

app.listen(port, () => {
    console.log("Server listening at port", port);
});