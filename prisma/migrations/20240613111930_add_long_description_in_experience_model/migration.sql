/*
  Warnings:

  - Added the required column `longDescription` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" ADD COLUMN     "longDescription" TEXT NOT NULL;
