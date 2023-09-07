import { db } from "../../../dbConfig/dbPrisma"; // Assurez-vous d'importer depuis le bon chemin
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Recherchez tous les utilisateurs avec Prisma
    const users = await db.user.findMany();

    // Retournez les données sous forme de réponse JSON
    return res.status(200).json({ users });
  } catch (error: any) {
    console.error("Une erreur s'est produite :", error);
    return res.status(500).json({ error: error.message });
  }
}
