/*
  Warnings:

  - You are about to drop the column `product_id` on the `OrderDetails` table. All the data in the column will be lost.
  - Added the required column `variant_id` to the `OrderDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderDetails" DROP CONSTRAINT "OrderDetails_product_id_fkey";

-- AlterTable
ALTER TABLE "OrderDetails" DROP COLUMN "product_id",
ADD COLUMN     "variant_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "OrderDetails" ADD CONSTRAINT "OrderDetails_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "Variants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
