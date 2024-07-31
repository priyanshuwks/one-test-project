-- CreateTable
CREATE TABLE "Flat" (
    "id" SERIAL NOT NULL,
    "imageUrl" TEXT,
    "flatSize" TEXT,
    "description" TEXT,
    "furnished" TEXT,
    "price" INTEGER,
    "requiredFor" TEXT,
    "balconyFacing" TEXT,
    "publisherId" INTEGER NOT NULL,

    CONSTRAINT "Flat_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Flat" ADD CONSTRAINT "Flat_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
