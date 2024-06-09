/*
  Warnings:

  - Made the column `date` on table `BookedSlot` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "BookedSlot" ALTER COLUMN "date" SET NOT NULL;

-- AlterTable
ALTER TABLE "Reservation" ADD COLUMN     "bookedSlotId" TEXT;

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_bookedSlotId_fkey" FOREIGN KEY ("bookedSlotId") REFERENCES "BookedSlot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
