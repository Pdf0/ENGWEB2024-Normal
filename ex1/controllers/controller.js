const { model } = require('mongoose');
var Contratos = require('../models/model');

// Display list of all Contratos.

module.exports.list = () => {
    return Contratos
        .find()
        .exec();
}

module.exports.contratos_detail = (id) => { 
    return Contratos
        .findById(id)
        .exec();
}

// Display Contratos that have Entidade 

module.exports.findByEntidade = (entidade) => {
    return Contratos
        .find({ NIPC_entidade_comunicante: entidade })
        .exec();
}

// Display Contratos that have Tipo

module.exports.findByTipo = (tipo) => {
    return Contratos
        .find({ tipoprocedimento: tipo })
        .exec();
}

// Display Entidades comunicantes sorted 

module.exports.listUniqueEntidades = () => {
    return Contratos
        .distinct("entidade_comunicante")
        .sort()
        .exec();
}

// Display Tipo de procedimento sorted

module.exports.listUniqueTipos = () => {
    return Contratos
        .distinct("tipoprocedimento")
        .sort()
        .exec();
}

// Add new Contrato

module.exports.create = (contrato) => {
    if (Contratos.findOne({ _id: contrato._id })) {
        return Promise.reject(new Error("Id already exists"))
    }

    var novo = new Contratos(contrato)
    return novo.save()
}

// Delete Contrato

module.exports.delete = (id) => {
    return Contratos
        .deleteOne({ _id: id })
        .exec()
}

// Put Contrato

module.exports.contraupdateById = (id, contrato) => {
    return Contratos
        .updateOne({ _id: id }, contrato)
        .exec()
}