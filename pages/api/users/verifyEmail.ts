import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const db = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { token } = req.body; // Destructure the token directly from the request body
        console.log("Token reçu :", token);

        // Vérification pour user
        const user = await db.user.findFirst({
            where: {
                verifyToken: token,
                isVerified: false, // Make sure the user is not already verified
                verifyTokenExpiry: {
                    gt: new Date(),
                },
            },
        });

        if (user) {
            console.log("Utilisateur trouvé :", user);
            console.log("Avant mise à jour - isVerified :", user.isVerified);

            // Update the user's verification status and clear the token fields
            await db.user.update({
                where: { id: user.id },
                data: {
                    isVerified: true,
                    verifyToken: undefined, 
                    verifyTokenExpiry: undefined,
                },
            });

            return res.status(200).json({
                message: "L'email a bien été vérifié",
                success: true,
            });
        }

        console.log("Token invalide, email déjà vérifié ou l'utilisateur n'existe pas.");
        return res.status(400).json({ error: "Invalid token, email already verified, or user does not exist" });
    } catch (error: any) {
        console.error("Erreur lors de la vérification de l'email :", error);
        return res.status(500).json({ error: error.message });
    }
}