import { NextApiRequest, NextApiResponse } from "next";
import { sendEmail } from "../../../helpers/mailer";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const db = prisma

export default async function POST(request: NextApiRequest, response: NextApiResponse) {
  try {
    const reqBody = await request.body;
    const { email } = reqBody;

    // Recherchez l'utilisateur par adresse e-mail
    const user = await db.user.findFirst({
      where: { email },
    });

    if (!user) {
      return response.status(400).json({ error: "Adresse e-mail non trouvée" });
    }

    // Envoyez l'e-mail de vérification
    await sendEmail({
      email,
      emailType: "VERIFY",
      userId: user.id,
    });

    return response.json({
      message: "Un e-mail de vérification a été renvoyé",
      success: true,
    });
  } catch (error: any) {
    return response.status(500).json({ error: error.message });
  }
}
