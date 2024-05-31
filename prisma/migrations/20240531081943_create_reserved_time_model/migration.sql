-- CreateTable
CREATE TABLE "ReservedTime" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReservedTime_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReservedTime" ADD CONSTRAINT "ReservedTime_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "Day"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
