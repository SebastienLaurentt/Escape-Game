/*
  Warnings:

  - You are about to drop the `TimeSlot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Reservation" DROP CONSTRAINT "Reservation_timeId_fkey";

-- DropTable
DROP TABLE "TimeSlot";

-- CreateTable
CREATE TABLE "BookedSlot" (
    "id" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "BookedSlot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "BookedSlot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
