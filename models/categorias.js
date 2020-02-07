const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const categoria = new Schema({
    nombre: { type: String, require: true },
    descripcion: { type: String },
    active: { type: Boolean, default: true }
});

module.exports = mongoose.model('categorias', categoria)