/*
  Warnings:

  - You are about to drop the column `stripe_checkout_id` on the `Orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Orders" DROP COLUMN "stripe_checkout_id";
