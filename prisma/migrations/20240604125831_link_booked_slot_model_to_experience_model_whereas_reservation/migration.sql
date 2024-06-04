/*
  Warnings:

  - You are about to drop the column `timeId` on the `Reservation` table. All the data in the column will be lost.
  - Added the required column `experienceId` to the `BookedSlot` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_timeId_fkey";

-- AlterTable
ALTER TABLE "BookedSlot" ADD COLUMN     "experienceId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "timeId";

-- AddForeignKey
ALTER TABLE "BookedSlot" ADD CONSTRAINT "BookedSlot_experienceId_fkey" FOREIGN KEY ("experienceId") REFERENCES "Experience"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
