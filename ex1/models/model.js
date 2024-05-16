const mongoose = require("mongoose");
const { Schema } = mongoose;

const contratosSchema = new Schema({
    _id: Number,
    nAnuncio: String,
    tipoprocedimento: String,
    objectoContrato: String,
    dataPublicacao: String,
    dataCelebracaoContrato: String,
    precoContratual: String,
    prazoExecucao: Number,
    NIPC_entidade_comunicante: Number,
    entidade_comunicante: String,
    fundamentacao: String
}, { collection: 'contratos' });

module.exports = mongoose.model('contrato', contratosSchema);