import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const db = prisma

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Obtain the user's session
    const session = await getSession({ req });

    if (!session || !session.id) {
      console.log("User not logged in");
      return res.status(401).json({ error: "You are not logged in" });
    }

    const userId = parseInt(session.id); 

    // Search for the user in the User table with Prisma
    const user = await db.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      console.log("User does not exist");
      return res.status(404).json({ error: "User does not exist" });
    }

    return res.status(200).json({ user });
  } catch (error: any) {
    console.error("An error occurred:", error);
    return res.status(500).json({ error: error.message });
  }
}
