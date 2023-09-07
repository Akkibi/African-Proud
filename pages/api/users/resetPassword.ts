import { NextApiRequest, NextApiResponse } from "next";
import bcryptjs from 'bcryptjs';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const db = prisma

export default async function POST(request: NextApiRequest, response: NextApiResponse) {
  try {
    const reqBody = await request.body;
    const { token, newPassword } = reqBody;

    // Recherchez l'utilisateur par son token de réinitialisation de mot de passe
    const user = await db.user.findFirst({
      where: {
        forgotPasswordToken: token,
        forgotPasswordTokenExpiry: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return response.status(400).json({ error: "Token invalide" });
    }

    // Hash du nouveau mot de passe
    const hashedPassword = await bcryptjs.hash(newPassword, 10);

    // Mettez à jour le mot de passe de l'utilisateur
    await db.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        forgotPasswordToken: "",
        forgotPasswordTokenExpiry: null, // Set to null or an appropriate value
      },
    });

    return response.json({
      message: "Le mot de passe a été réinitialisé avec succès",
      success: true,
    });
  } catch (error: any) {
    return response.status(500).json({ error: error.message });
  }
}
