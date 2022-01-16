const sequelize = require('../database/db');
const { DataTypes, Model } = require('sequelize');

class marcasModel extends Model { }

marcasModel.init({
    nombre: DataTypes.STRING,
    pais: DataTypes.STRING,
}, { sequelize, modelName: 'marcas', underscored: true }
);


module.exports = marcasModel;

