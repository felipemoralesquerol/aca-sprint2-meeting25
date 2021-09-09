const sequelize = require('../database/db');

const televisorModel = require('./televisor');
const marcaModel = require('./marca');
const modeloModel = require('./modelo');

// Agregado de relaciones

// El atributo marca_id se agregar en el modelo origen (televisor)
// El televisor pertenece a una marca
televisorModel.belongsTo(marcaModel);

// El atributo modelo_id se agregar en el modelo origen (televisor)
// El televisor pertenece a un modelo
televisorModel.belongsTo(modeloModel);

// El atributo marca_id se agregar en el modelo origen (modelo)
// El modelo pertenece a una marca
modeloModel.belongsTo(marcaModel);


marcaModel.hasOne(modeloModel);
