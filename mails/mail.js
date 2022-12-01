const nodemailer = require('nodemailer')
const logger = require('../logs/reqLogger')

const EMAIL = 'leycibuelvas73@gmail.com'


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tcoderhouse1@gmail.com',
        pass: 'vmjawrvdunjsahaw'
    }
})  

function mail(dat1, dat2, dat3, dat4, dat5, dat6, dat7) {
    const mailOptions = {
        from: 'servidor de correo',
        to: EMAIL,
        subject: 'Nuevo registro',
        html: `Mail: ${dat1}, Password: ${dat2}, Nombre: ${dat3}, Edad: ${dat4}, Direccion: ${dat5}, Telefono: ${dat6}, Avatar: ${dat7}`
    }
    async function sendMail() {
    try{
        const info = await transporter.sendMail(mailOptions)
    } catch (error) {
        logger.error(error)
    }
    }
    sendMail()
}

function mailCompra(dat1, dat2, dat3) {
    const mailOptions = {
        from: 'servidor de correo',
        to: EMAIL,
        subject: `Nuevo pedido de: ${dat1}, mail: ${dat2}`,
        html: `Productos que copro: ${dat3}`
    }
    async function sendMail() {
    try{
        const info = await transporter.sendMail(mailOptions)
    } catch (error) {
        logger.error(error)
    }
    }
    sendMail()
}



module.exports = { mail, mailCompra }