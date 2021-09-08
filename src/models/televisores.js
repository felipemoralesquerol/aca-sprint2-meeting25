const sequelize = require('../database/db');
const { DataTypes, Model } = require('sequelize');

class televisoresModel extends Model { }
televisoresModel.init({
    marcaId: DataTypes.INTEGER,
    modeloId: DataTypes.INTEGER,
    smart: DataTypes.BOOLEAN,
    precio: DataTypes.DECIMAL,
    pantalla: DataTypes.STRING
}, { sequelize, modelName: 'televisores' }
);

module.exports = televisoresModel;

