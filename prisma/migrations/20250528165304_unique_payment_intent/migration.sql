/*
  Warnings:

  - A unique constraint covering the columns `[payment_intent]` on the table `Payments` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Payments_payment_intent_key" ON "Payments"("payment_intent");
