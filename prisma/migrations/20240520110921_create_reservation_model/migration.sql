-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "experienceId" TEXT,
    "people" TEXT,
    "date" TIMESTAMP(3),

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);
