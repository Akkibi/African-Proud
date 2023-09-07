/*
  Warnings:

  - You are about to drop the `artistuser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `publicuser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `artistuser`;

-- DropTable
DROP TABLE `publicuser`;

-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `genre` VARCHAR(191) NOT NULL,
    `firstName` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `country` VARCHAR(191) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,
    `phoneNumberCountry` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `isAdmin` BOOLEAN NOT NULL,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `userType` VARCHAR(191) NOT NULL,
    `contrat` LONGBLOB NULL,
    `forgotPasswordToken` VARCHAR(191) NOT NULL,
    `forgotPasswordTokenExpiry` DATETIME(3) NULL,
    `verifyToken` VARCHAR(191) NOT NULL,
    `verifyTokenExpiry` DATETIME(3) NULL,

    UNIQUE INDEX `User_username_key`(`username`),
    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
