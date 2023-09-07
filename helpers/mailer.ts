import bcryptjs from 'bcryptjs';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // Créez un hashedToken
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    // Recherchez l'utilisateur dans la table User
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      const updateData: any = {};
      if (emailType === "VERIFY") {
        updateData.verifyToken = hashedToken;
        updateData.verifyTokenExpiry = new Date(Date.now() + 3600000);
      } else if (emailType === "RESET") {
        updateData.forgotPasswordToken = hashedToken;
        updateData.forgotPasswordTokenExpiry = new Date(Date.now() + 3600000);
      }

      await prisma.user.update({
        where: { id: userId },
        data: updateData,
      });
    }

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
      },
    });

    let subject, emailText;

    if (emailType === "VERIFY") {
      subject = "Vérification email";
      emailText = `Cliquez <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">ici</a> pour confirmer votre email ou copier ce lien dans votre navigateur. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}`;
    } else if (emailType === "RESET") {
      subject = "Réinitialiser votre mot de passe";
      emailText = `Cliquez <a href="${process.env.DOMAIN}/resetmdp?token=${hashedToken}">ici</a> pour réinitialiser votre mot de passe ou copier ce lien dans votre navigateur. <br> ${process.env.DOMAIN}/resetpassword?token=${hashedToken}`;
    }
    

    const mailOptions = {
      from: 'pako1709@gmail.com',
      to: email,
      subject,
      html: `<p>${emailText}</p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};