const mongoose = require('mongoose')

const esquemaUser = new mongoose.Schema({
    mail: {type: String, require: true},
    password: {type: String, require: true},
    nombre: {type: String, require: true},
    edad: {type: Number, require: true},
    direccion: {type: String, require: true},
    telefono: {type: Number, require: true},
    avatar: {type: String, require: true},
    idC: {type: String, require: true},
})

module.exports = mongoose.model('user', esquemaUser)