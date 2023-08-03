// Import the Prisma client and model types
import { PrismaClient, Public } from '@prisma/client'

// Create an instance of the Prisma client
const prisma = new PrismaClient()

// Example usage: Find a user by their ID
async function findUserById(userId: number): Promise<Public | null> {
  const user = await prisma.public.findUnique({
    where: {
      id: userId,
    },
  })

  return user
}

// Remember to close the Prisma client when it's no longer needed to release resources
// This should be done when your application is shutting down
// For example, in a cleanup function or at the end of your script
async function cleanup() {
  await prisma.$disconnect()
}

// Export the Prisma client and any other functions as needed
export { prisma, findUserById, cleanup }
