const mongoose = require('mongoose')

const esquemaCarrito = new mongoose.Schema({
    productos: [{type: Object, require: false}],
})

module.exports = mongoose.model('carrito', esquemaCarrito)