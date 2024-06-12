/*
  Warnings:

  - Added the required column `isOpen` to the `OpeningHours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OpeningHours" ADD COLUMN     "isOpen" BOOLEAN NOT NULL;
