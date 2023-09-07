import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const db = prisma


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query; // Extraire l'ID de l'URL
    const { title, content, link, published } = req.body;

    // Vérifiez si id est présent dans la requête
    if (!id) {
      return res.status(400).json({ error: "L'ID est requis pour mettre à jour les informations." });
    }

    // Utilisez Prisma pour mettre à jour l'élément dans la table Music
    const updatedMusic = await db.music.update({
      where: {
        id: parseInt(id as string, 10),
      },
      data: {
        title,
        content,
        link,
        published,
      },
    });

    if (updatedMusic) {
      return res.status(200).json({ message: "Music mise à jour avec succès." });
    } else {
      return res.status(404).json({ error: "L'élément avec cet ID n'a pas été trouvé." });
    }
  } catch (error: any) {
    console.error("Erreur lors de la mise à jour :", error);
    return res.status(500).json({ error: "Une erreur s'est produite lors de la mise à jour." });
  }
}
