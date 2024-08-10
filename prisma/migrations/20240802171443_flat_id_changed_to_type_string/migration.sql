/*
  Warnings:

  - The primary key for the `Flat` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Flat" DROP CONSTRAINT "Flat_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Flat_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Flat_id_seq";
