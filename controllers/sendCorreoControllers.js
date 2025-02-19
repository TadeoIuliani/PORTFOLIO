const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail', // O el servicio de correo que elijas
  auth: {
    user: 'tadeiuliani@gmail.com',
    pass: 'kfsf avii rklh gycm', // Puedes usar contraseñas de aplicaciones si usas Gmail con verificación en dos pasos
  },
});

// const sendEmail = (req, res) => {
//     const { name, email, message } = req.body; // Aquí recoges los datos del formulario
  
//     const mailOptions = {
//       from: 'tu-correo@gmail.com',
//       to: 'destino-correo@example.com', // Correo donde recibes los mensajes
//       subject: 'Nuevo mensaje desde el formulario',
//       text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
//     };
  
//     transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//         return res.status(500).send('Error al enviar el correo');
//       }
//       res.status(200).send('Correo enviado correctamente');
//     });
//   };
  
module.exports = {
    index : (req, res) => {
        const { name, email, message } = req.body; // Aquí recoges los datos del formulario
      
        const mailOptions = {
          from: 'tu-correo@gmail.com',
          to: 'tadeiuliani@gmail.com', // Correo donde recibes los mensajes
          subject: 'Nuevo mensaje desde el formulario',
          text: `Nombre: ${name}Correo: ${email}Mensaje: ${message}`,
        };
      
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            return res.status(500).json('Error al enviar el correo');
          }
          res.status(200).json('Correo enviado correctamente');
        });
      }
}