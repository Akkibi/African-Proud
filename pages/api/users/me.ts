import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const db = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Récupérez la session de l'utilisateur
    const session = await getSession({ req });

    if (!session) {
      console.log("Session non trouvée");
      return res.status(401).json({ error: "Vous n'êtes pas connecté" });
    }

    const userId = parseInt(session.id, 10);

    // Recherchez l'utilisateur dans la table User
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      console.log("L'utilisateur n'existe pas");
      return res.status(404).json({ error: "L'utilisateur n'existe pas" });
    }

    return res.status(200).json({ user });
  } catch (error: any) {
    console.error("Une erreur s'est produite :", error);
    return res.status(500).json({ error: error.message });
  }
}
