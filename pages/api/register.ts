import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {
      genre,
      username,
      email,
      phoneNumber,
      phoneNumberCountry,
      password,
    } = req.body;

    try {
      const user = await prisma.public.create({
        data: {
          genre,
          username,
          email,
          phoneNumber,
          phoneNumberCountry,
          password, // Note: You should hash the password before saving it to the database for security reasons.
        },
      });

      return res
        .status(200)
        .json({ message: "User created successfully!", user });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Unable to register user." + error });
    }
  }

  return res.status(405).end();
}
