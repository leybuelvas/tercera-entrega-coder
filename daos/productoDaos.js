const mongoose = require('mongoose')
const esquemaProd = require('./modelsMDB/schemaProducto')
const logger = require('../logs/reqLogger')

class Producto {
    async connectMDB() {
        try {
            const URL = "mongodb+srv://supercris56:Super56@cluster0.brgzxxr.mongodb.net/?retryWrites=true&w=majority"
            let rta = await mongoose.connect(URL, {
                useNewUrlParser: true,
                useUniFiedTopology: true
            })
        } catch (e) {
            logger.error(e)
        }   
    }

    async save(producto) {
        try {
            let tiempo = new Date()
            await this.connectMDB()
            producto.time = tiempo.toString()
            await esquemaProd.create(producto)
            const id = producto.idP
            mongoose.disconnect()
            return id
        } catch (error) {
            logger.error(error)
        }
    }

    async getAll() {
        try {
            await this.connectMDB()
            const prod = await esquemaProd.find({})
            mongoose.disconnect()
            return prod
        } catch (error) {
            logger.error(error)
        }
    }

    async getById(id) {
        try {
            await this.connectMDB()
            const prodId = await esquemaProd.findById(id)
            mongoose.disconnect()
            return prodId
        } catch (error) {
            logger.error(error)
        }
    }

    async changeById(id, cambio) {
        try {
            await this.connectMDB()
            const nuevo = await esquemaProd.updateOne({idP: id}, {$set: cambio})
            mongoose.disconnect()
            return nuevo
        } catch (error) {
            logger.error(error)
        }
    }

    async deleteById(id) {
        try {
            await this.connectMDB()
            const borrado = await esquemaProd.deleteOne({idP: id})
            mongoose.disconnect()
            return borrado
        } catch (error) {
            logger.error(error)
        }
    }
}

module.exports = Producto