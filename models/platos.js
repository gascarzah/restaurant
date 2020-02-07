const mongoose = require('mongoose')

const Schema = mongoose.Schema


const plato = new Schema({
    nombre: { type: String, require: true },
    descripcion: { type: String },
    active: { type: Boolean, default: true }

});

module.exports = mongoose.model('plato', plato)