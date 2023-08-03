// Import the required types from Next.js and Prisma
import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../prisma/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Destructure the properties from req.body and assign types
    const {
      genre,
      username,
      email,
      phoneNumber,
      phoneNumberCountry,
      password,
      emailVerified,
    } = req.body

    try {
      // Check if the phone number already exists in the database
      const existingUser = await prisma.public.findUnique({
        where: {
          phoneNumber: phoneNumber,
        },
      })

      if (existingUser) {
        return res
          .status(400)
          .json({ error: 'Phone number already exists in the database.' })
      }

      // If the phone number is unique, create the user
      const user = await prisma.public.create({
        data: {
          genre,
          username,
          email,
          phoneNumber,
          phoneNumberCountry,
          password,
          emailVerified,
        },
      })

      return res
        .status(200)
        .json({ message: 'User created successfully!', user })
    } catch (error) {
      console.error('Error creating user:', error)
      return res.status(500).json({ error: 'Unable to register user.' + error })
    }
  }

  return res.status(405).end()
}
