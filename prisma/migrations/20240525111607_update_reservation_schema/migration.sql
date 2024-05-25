/*
  Warnings:

  - You are about to drop the column `date` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `people` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `Reservation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "date",
DROP COLUMN "email",
DROP COLUMN "name",
DROP COLUMN "people",
DROP COLUMN "phone",
DROP COLUMN "price",
DROP COLUMN "time";
