const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usuario = new Schema({

    nombre: { type: String, require: true },

    active: { type: Boolean, default: true }
});

module.exports = mongoose.model('usuario', usuario)