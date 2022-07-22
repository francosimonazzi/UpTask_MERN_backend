import nodemailer from 'nodemailer';


export const emailRegistro = async (datos) => {
    const {nombre, email, token} = datos;

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT, 
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
        to: email,
        subject: 'Confirmación de cuenta',
        text: "comprueba tu cuenta",
        html: `<p>Hola ${nombre} comprueda tu cuenta en UpTask</p>
                <p>Para confirmar tu cuenta haz click en el siguiente enlace:</p>
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a>`
        });
    }

    export const emailOlvidePassword = async (datos) => {
      const {nombre, email, token} = datos;
  
      const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT, 
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
          }
        });
  
        const info = await transport.sendMail({
          from: '"UpTask - Administrador de Proyectos" <cuentas@uptask.com>',
          to: email,
          subject: 'restablece tu contraseña',
          text: "restablece tu contraseña",
          html: `<p>Hola ${nombre} has solcitado restablecer tu contraseña UpTask</p>
                  <p>Sigue el siguiente enlace:</p>
                  <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer Contraseña</a>
                  <p>Si no has solicitado restablecer tu contraseña, ignora este correo</p>`
          });
      }



