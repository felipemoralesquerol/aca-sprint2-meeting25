const sequelize = require('../database/db');
const { DataTypes, Model } = require('sequelize');

class bandaModel extends Model { }
bandaModel.init({
    nombre: DataTypes.STRING,
    integrantes: DataTypes.INTEGER,
    fecha_inicio: DataTypes.DATE,
    fecha_separacion: DataTypes.DATE,
}, { sequelize, modelName: 'bandas' }
);

module.exports = bandaModel;