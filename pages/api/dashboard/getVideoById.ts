import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../dbConfig/dbPrisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query;

    if (!id) {
      return res.status(400).json({ error: "L'ID de la vidéo est manquant dans la requête." });
    }

    // Utilisez Prisma pour récupérer la vidéo par ID
    const video = await db.video.findUnique({
      where: {
        id: parseInt(id as string, 10),
      },
    });

    if (!video) {
      return res.status(404).json({ error: "Vidéo non trouvée." });
    }

    return res.status(200).json(video);
  } catch (error: any) {
    console.error("Une erreur s'est produite :", error);
    return res.status(500).json({ error: error.message });
  }
}
