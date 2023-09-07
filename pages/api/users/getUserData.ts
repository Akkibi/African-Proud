import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Recherchez tous les utilisateurs avec Prisma
    const users = await prisma.user.findMany();

    // Retournez les données sous forme de réponse JSON
    return res.status(200).json({ users });
  } catch (error: any) {
    console.error("Une erreur s'est produite :", error);
    return res.status(500).json({ error: error.message });
  }
}
