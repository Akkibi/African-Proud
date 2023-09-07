import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { db } from "../../../dbConfig/dbPrisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Obtenez la session de l'utilisateur
    const session = await getSession({ req });

    if (!session || !session.user?.id) {
      console.log("Utilisateur non connecté");
      return res.status(401).json({ error: "Vous n'êtes pas connecté" });
    }

    const userId = session.user.id;

    // Recherchez l'utilisateur dans la table User avec Prisma
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
