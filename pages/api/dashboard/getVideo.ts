import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../dbConfig/dbPrisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Utilisez Prisma pour récupérer toutes les vidéos
    const videos = await db.video.findMany();

    return res.status(200).json(videos);
  } catch (error: any) {
    console.error("Une erreur s'est produite :", error);
    return res.status(500).json({ error: error.message });
  }
}