const Producto = require('./daos/productoDaos')
const logger = require('./logs/reqLogger')

const prod = new Producto()


async function productos() {
    try {
        const productos = await prod.getAll()
        return productos
    } catch (error) {
        logger.error(error)
    }
}

module.exports = { productos }