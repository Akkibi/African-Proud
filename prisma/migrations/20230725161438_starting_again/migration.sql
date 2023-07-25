/*
  Warnings:

  - You are about to drop the column `pseudo` on the `Artist` table. All the data in the column will be lost.
  - You are about to drop the column `pseudo` on the `Public` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[phoneNumber]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Artist` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phoneNumber]` on the table `Public` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Public` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `username` to the `Artist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Artist" DROP COLUMN "pseudo",
ADD COLUMN     "username" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Public" DROP COLUMN "pseudo",
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "username" TEXT,
ALTER COLUMN "email" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Artist_phoneNumber_key" ON "Artist"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Artist_email_key" ON "Artist"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Public_phoneNumber_key" ON "Public"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Public_email_key" ON "Public"("email");
