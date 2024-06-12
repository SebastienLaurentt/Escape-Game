-- CreateTable
CREATE TABLE "OpeningHours" (
    "id" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "openingHour" TEXT,
    "closingHour" TEXT,

    CONSTRAINT "OpeningHours_pkey" PRIMARY KEY ("id")
);
