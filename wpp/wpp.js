const twilio = require('twilio');
const logger = require('../logs/reqLogger')

const accountSid = "ACd19d47d4c24ba9370c236c9ffc8b0b9e"
const authToken = "f980011d55d388bbff569a62695b2a4f"


const client = twilio(accountSid, authToken);

function sendWpp(dat1, dat2, prod) {
  try {
    client.messages.create({
      body: `Compra de: ${dat1}, mail: ${dat2}, productos: ${prod}`,
      from: 'whatsapp:+573052215557',       
      to: 'whatsapp:+3147872867'
    })
  } catch (error) {
    logger.error(error)
  }
}

function wppComprador(num){
    try {
        client.messages.create({
        body: `Su pedido ha sido recibido, se encuentra en proceso`,
        from: 'whatsapp:+573052215557',       
        to: `whatsapp:+${num}`
        })
    } catch (error) {
        logger.error(error)
    }
}

module.exports = { sendWpp, wppComprador }