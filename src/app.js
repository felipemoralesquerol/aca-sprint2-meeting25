// Importación de base de datos
// const mongoose = require('./database/mongo');
const sequelize = require('./database/db');

const morgan = require('morgan');

require('dotenv').config();

// Info gestionada en MySQL
const televisoresRouter = require('./routes/televisores');
const marcasRouter = require('./routes/marcas');
const modelosRouter = require('./routes/modelos')

// Info de asociaciones
asociaciones = require('./models/associations');

// Importaciones adicionales
const cors = require('cors');
const express = require('express');
const helmet = require('helmet');
const app = express();

// Settings
app.use(helmet({
    contentSecurityPolicy: true,
}));

app.use(express.json());
app.use(morgan('combined'));
// Gestión de cors
app.use(cors());
app.options('*', cors());

app.use('/televisores', televisoresRouter);
app.use('/marcas', marcasRouter);
app.use('/modelos', modelosRouter);

app.use('/version', (req, res) => {
    const admin = new mongoose.mongo.Admin(mongoose.connection.db);
    admin.buildInfo(function (err, info) {
        console.log(`Versión interna mongodb: ${info.version}`);
        console.log(`Versión interna mongoose: ${mongoose.version}`);
    });
    res.json('Acámica Rock v1.0');
})

app.listen(process.env.EXPRESS_PORT, () => {
    console.log('Servicio iniciado en puerto ' + process.env.EXPRESS_PORT)
}
)



