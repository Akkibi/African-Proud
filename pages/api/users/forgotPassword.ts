import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../../helpers/mailer";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const db = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const reqBody = await req.body;
    const { email } = reqBody;

    // Recherchez l'utilisateur dans la table User avec Prisma
    const user = await db.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({ error: "Adresse e-mail non trouvée" });
    }

    // Envoyez l'e-mail de réinitialisation de mot de passe
    await sendEmail({
      email,
      emailType: "RESET",
      userId: user.id,
    });

    return res.json({
      message: "Un e-mail de réinitialisation de mot de passe a été envoyé",
      success: true,
    });
  } catch (error: any) {
    console.error("Une erreur s'est produite :", error);
    return res.status(500).json({ error: error.message });
  }
}
