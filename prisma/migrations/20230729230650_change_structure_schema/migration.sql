/*
  Warnings:

  - The primary key for the `cartproducts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `cartproducts` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_productId_fkey`;

-- AlterTable
ALTER TABLE `cartproducts` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD PRIMARY KEY (`productId`);

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `CartProducts`(`productId`) ON DELETE RESTRICT ON UPDATE CASCADE;
