/*
  Warnings:

  - You are about to drop the column `time` on the `Reservation` table. All the data in the column will be lost.
  - You are about to drop the `ReservedTime` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReservedTime" DROP CONSTRAINT "ReservedTime_dayId_fkey";

-- AlterTable
ALTER TABLE "Reservation" DROP COLUMN "time",
ADD COLUMN     "timeId" TEXT;

-- DropTable
DROP TABLE "ReservedTime";

-- CreateTable
CREATE TABLE "TimeSlot" (
    "id" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "TimeSlot_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Reservation" ADD CONSTRAINT "Reservation_timeId_fkey" FOREIGN KEY ("timeId") REFERENCES "TimeSlot"("id") ON DELETE SET NULL ON UPDATE CASCADE;
