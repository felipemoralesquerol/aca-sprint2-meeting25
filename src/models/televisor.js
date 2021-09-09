const sequelize = require('../database/db');
const { DataTypes, Model } = require('sequelize');

class televisoresModel extends Model { }
televisoresModel.init({
    smart: DataTypes.BOOLEAN,
    precio: DataTypes.DECIMAL,
    pantalla: DataTypes.STRING
}, { sequelize, modelName: 'televisores', underscored: true }
);

module.exports = televisoresModel;

