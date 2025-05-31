/*
  Warnings:

  - You are about to drop the column `bucket` on the `Files` table. All the data in the column will be lost.
  - You are about to drop the column `idKey` on the `Files` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Files" DROP COLUMN "bucket",
DROP COLUMN "idKey",
ADD COLUMN     "file_url" TEXT;
