const sequelize = require('../database/db');
const { DataTypes, Model } = require('sequelize');

class albumModel extends Model { }
User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
}, { sequelize, modelName: 'albumes' }
);
