// Conector a la base de datos
const sequelize = require('../database/db');

// Importación de modelos
const modelosModel = require('../models/modelo');
const tableName = 'modelos';

exports.Exist = async function (req, res, next) {
    try {
        // Evita SQL injection
        if (isNaN(parseInt(req.params.id))) {
            throw new Error('Error de peticion (Se espera un valor entero))');
        }
        // TODO: Refactoring
        cadena = `SELECT * FROM ${tableName} WHERE id = ${req.params.id};`
        const respuesta = await sequelize.query(cadena, { type: sequelize.QueryTypes.SELECT });
        console.log(respuesta);
        // cadena = {
        //     where: { id: req.params.id }
        // }
        // const respuesta = await modelosModel.findByPk(req.params.id);
        // console.log(respuesta);

        if (respuesta.length > 0) {
            // cadenaRelation1 = `SELECT * FROM ${relation1} WHERE banda_id = ${req.params.id}`;
            // const respuestaRelation1 = await sequelize.query(cadenaRelation1, { type: sequelize.QueryTypes.SELECT });
            // req.banda = { banda: respuesta, albumes: [respuestaRelation1] };
            req.banda = { banda: respuesta };
            next();
        } else {
            res.status(404).json({ status: 'No encontrado' });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ status: 'Error interno' })
    }

};


exports.Search = async function (req, res, next) {
    try {
        // TODO: Incluir
        // buscar = ""
        // if (req.query.pais) {
        //     buscar += ` pais like '%${req.query.pais}%' AND `;
        // };
        // if (req.query.nombre) {
        //     buscar += `nombre like '%${req.query.nombre}%' AND `
        // };
        // if (req.query.integrantes) {
        //     buscar += `integrantes = ${req.query.integrantes} AND `
        // };

        cadena = {
            where: { nombre: req.query.nombre }
        }
        const respuesta = await modelosModel.findAll(cadena);
        if (respuesta.length > 0) {
            res.json(respuesta);
        } else {
            res.status(404).json({ status: 'No encontrado' });
        }

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ status: 'Error interno' })
    }

};

exports.List = async function (req, res, next) {
    try {
        const todos = await modelosModel.findAll();
        console.log(todos);
        res.json(todos);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ status: 'Error interno', texto: err.message });
    }
};

exports.Count = async function (req, res, next) {
    const todos = await modelosModel.findAndCountAll(); // TODO:refactoring +  performance optimization
    res.json({ cant: todos.count });
};

exports.Add = async function (req, res, next) {
    try {
        cadena = {

            marcaId: req.body.marcaId,
            modeloId: req.body.modeloId,
            smart: req.body.smart,
            precio: req.body.precio,
            pantalla: req.body.pantalla
        };
        console.log(req.body, cadena);
        const resultado = await modelosModel.create(cadena);
        res.json(resultado.toJSON);
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ status: 'Error interno' });
    }
};


exports.Update = async function (req, res, next) {
    try {
        cadena = {
            nombre: req.body.nombre,
            integrantes: req.body.integrantes,
            fecha_inicio: req.body.fecha_inicio,
            fecha_separacion: req.body.fecha_inicio,
            pais: req.body.pais
        };
        console.log(req.body, cadena);
        const resultado = await modelosModel.update(cadena, { where: { id: req.params.id } });
        res.json({ status: resultado.toJSON });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ status: 'Error interno' });
    }
}
exports.Delete = async function (req, res, next) {
    try {
        const resultado = await modelosModel.destroy({
            where: { id: req.params.id }
        });
        console.log(resultado)
        res.json({ resultado: resultado });
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ status: 'Error interno' });
    }
};



