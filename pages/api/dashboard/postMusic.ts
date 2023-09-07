import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const db = prisma


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const reqBody = req.body;
    const { title, content, link, published } = reqBody;

    // Utilisez Prisma pour créer une nouvelle entrée dans la table Music
    const newMusic = await db.music.create({
      data: {
        title,
        content,
        link,
        published,
      },
    });

    return res.status(201).json({
      message: "Music created successfully",
      success: true,
      savedMusic: newMusic,
    });
  } catch (error: any) {
    console.error("Une erreur s'est produite :", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
