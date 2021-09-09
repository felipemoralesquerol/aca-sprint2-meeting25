const sequelize = require('../database/db');
const { DataTypes, Model } = require('sequelize');

class modelosModel extends Model { }
modelosModel.init({
    nombre: DataTypes.STRING,
}, { sequelize, modelName: 'modelos', underscored: true }
);

module.exports = modelosModel;

