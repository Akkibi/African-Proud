import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const db = prisma


export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { id } = req.query; // Extraire l'ID de l'URL
        const { title, content, link, isPublished } = req.body;

        // Vérifiez si id est présent dans la requête
        if (!id) {
            return res.status(400).json({ error: "L'ID est requis pour mettre à jour les informations." });
        }

        // Utilisez Prisma pour rechercher la vidéo par ID
        const existingVideo = await db.video.findUnique({
            where: {
                id: parseInt(id as string), // Convertir l'ID en nombre
            },
        });

        if (existingVideo) {
            // Mettez à jour les propriétés de la vidéo
            const updatedVideo = await db.video.update({
                where: {
                    id: existingVideo.id,
                },
                data: {
                    title: title || existingVideo.title,
                    content: content || existingVideo.content,
                    link: link || existingVideo.link,
                    published: isPublished || existingVideo.published,
                },
            });

            return res.status(200).json({ message: "Vidéo mise à jour avec succès.", updatedVideo });
        } else {
            return res.status(404).json({ error: "L'élément avec cet ID n'a pas été trouvé." });
        }
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error);
        return res.status(500).json({ error: "Une erreur s'est produite lors de la mise à jour." });
    }
}
