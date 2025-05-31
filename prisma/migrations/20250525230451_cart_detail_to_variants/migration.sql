/*
  Warnings:

  - You are about to drop the column `product_id` on the `CartDetails` table. All the data in the column will be lost.
  - Added the required column `variant_id` to the `CartDetails` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CartDetails" DROP CONSTRAINT "CartDetails_product_id_fkey";

-- DropIndex
DROP INDEX "CartDetails_product_id_cart_id_key";

-- AlterTable
ALTER TABLE "CartDetails" DROP COLUMN "product_id",
ADD COLUMN     "variant_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CartDetails" ADD CONSTRAINT "CartDetails_variant_id_fkey" FOREIGN KEY ("variant_id") REFERENCES "Variants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
