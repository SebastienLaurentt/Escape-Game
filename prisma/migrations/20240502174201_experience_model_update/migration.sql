/*
  Warnings:

  - Added the required column `description` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `durationUnit` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minPeople` to the `Experience` table without a default value. This is not possible if the table is not empty.
  - Added the required column `minPrice` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "durationUnit" TEXT NOT NULL,
ADD COLUMN     "maxPeople" INTEGER,
ADD COLUMN     "minPeople" INTEGER NOT NULL,
ADD COLUMN     "minPrice" INTEGER NOT NULL;
