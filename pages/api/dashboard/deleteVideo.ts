import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../dbConfig/dbPrisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { id } = req.query; // Extraire l'ID de l'URL

    // Vérifiez si id est présent dans la requête
    if (!id) {
      return res.status(400).json({ error: "L'ID est requis pour supprimer la vidéo." });
    }

    // Utilisez Prisma pour supprimer la vidéo par ID
    const deletedVideo = await db.video.delete({
      where: {
        id: parseInt(id as string, 10),
      },
    });

    // Vérifiez si la vidéo a été supprimée avec succès
    if (deletedVideo) {
      return res.status(200).json({ message: "Vidéo supprimée avec succès." });
    } else {
      return res.status(404).json({ error: "La vidéo avec cet ID n'a pas été trouvée." });
    }
  } catch (error: any) {
    console.error("Erreur lors de la suppression de la vidéo :", error);
    return res.status(500).json({ error: "Une erreur s'est produite lors de la suppression de la vidéo." });
  }
}
