-- CreateTable
CREATE TABLE "Reservation" (
    "id" TEXT NOT NULL,
    "experienceName" TEXT NOT NULL,
    "people" TEXT,
    "date" TIMESTAMP(3),
    "price" TEXT,
    "time" TEXT,
    "name" TEXT,
    "email" TEXT,
    "phone" TEXT,

    CONSTRAINT "Reservation_pkey" PRIMARY KEY ("id")
);
