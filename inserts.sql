-- Enable UUID generation if not already enabled
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 1. Brands Table
INSERT INTO public."Brands" (id, name) VALUES
(gen_random_uuid(), 'Nike'),
(gen_random_uuid(), 'Adidas'),
(gen_random_uuid(), 'Puma'),
(gen_random_uuid(), 'Under Armour'),
(gen_random_uuid(), 'Reebok');

-- 2. Categories Table (for shirts only)
-- First insert parent category
INSERT INTO public."Categories" (id, name, "parentId", active, "createdAt", "updatedAt")
VALUES (gen_random_uuid(), 'Man', null, true, now(), now());

-- Then insert child categories
INSERT INTO public."Categories" (id, name, "parentId", active, "createdAt", "updatedAt") VALUES
(gen_random_uuid(), 'T-Shirts', (SELECT id FROM "Categories" WHERE name = 'Man' LIMIT 1), true, now(), now()),
(gen_random_uuid(), 'Polo Shirts', (SELECT id FROM "Categories" WHERE name = 'Man' LIMIT 1), true, now(), now()),
(gen_random_uuid(), 'Long Sleeve', (SELECT id FROM "Categories" WHERE name = 'Man' LIMIT 1), true, now(), now());

-- 3. Products Table (all shirts)
INSERT INTO public."Products" (id, name, price, "created_at", "updated_at", active, "brand_id") VALUES
(gen_random_uuid(), 'Classic Cotton Tee', 24.99, now(), now(), true, (SELECT id FROM "Brands" WHERE name = 'Nike' LIMIT 1)),
(gen_random_uuid(), 'Performance Tee', 29.99, now(), now(), true, (SELECT id FROM "Brands" WHERE name = 'Adidas' LIMIT 1)),
(gen_random_uuid(), 'Premium Polo', 39.99, now(), now(), true, (SELECT id FROM "Brands" WHERE name = 'Puma' LIMIT 1)),
(gen_random_uuid(), 'Thermal Long Sleeve', 34.99, now(), now(), true, (SELECT id FROM "Brands" WHERE name = 'Under Armour' LIMIT 1)),
(gen_random_uuid(), 'Graphic Tee', 27.99, now(), now(), true, (SELECT id FROM "Brands" WHERE name = 'Reebok' LIMIT 1)),
(gen_random_uuid(), 'Graphic Tee PUT', 30.00, now(), now(), true, (SELECT id FROM "Brands" WHERE name = 'Adidas' LIMIT 1));

-- 4. Files Table (for shirt images)
INSERT INTO public."Files" (id, key, file_url) VALUES
(gen_random_uuid(), 'products/tshirt1.jpg', 'https://example.com/images/tshirt1.jpg'),
(gen_random_uuid(), 'products/tshirt2.jpg', 'https://example.com/images/tshirt2.jpg'),
(gen_random_uuid(), 'products/polo1.jpg', 'https://example.com/images/polo1.jpg'),
(gen_random_uuid(), 'products/longsleeve1.jpg', 'https://example.com/images/longsleeve1.jpg'),
(gen_random_uuid(), 'products/tshirt3.jpg', 'https://example.com/images/tshirt3.jpg');

-- 5. ProductCategories Table (assign shirts to categories)
INSERT INTO public."ProductCategories" ("productId", "categoryId") VALUES
((SELECT id FROM "Products" WHERE name = 'Classic Cotton Tee' LIMIT 1), (SELECT id FROM "Categories" WHERE name = 'T-Shirts' LIMIT 1)),
((SELECT id FROM "Products" WHERE name = 'Performance Tee' LIMIT 1), (SELECT id FROM "Categories" WHERE name = 'T-Shirts' LIMIT 1)),
((SELECT id FROM "Products" WHERE name = 'Premium Polo' LIMIT 1), (SELECT id FROM "Categories" WHERE name = 'Polo Shirts' LIMIT 1)),
((SELECT id FROM "Products" WHERE name = 'Thermal Long Sleeve' LIMIT 1), (SELECT id FROM "Categories" WHERE name = 'Long Sleeve' LIMIT 1)),
((SELECT id FROM "Products" WHERE name = 'Graphic Tee' LIMIT 1), (SELECT id FROM "Categories" WHERE name = 'T-Shirts' LIMIT 1));

-- 6. Variants Table (shirt sizes and colors)
INSERT INTO public."Variants" (id, "product_id", "file_id", size, "textColor", rgb, stock, "createdAt", "updatedAt") VALUES
(gen_random_uuid(), (SELECT id FROM "Products" WHERE name = 'Classic Cotton Tee' LIMIT 1), (SELECT id FROM "Files" WHERE key = 'products/tshirt1.jpg' LIMIT 1), 'SMALL', 'BLACK', '000000', 100, now(), now()),
(gen_random_uuid(), (SELECT id FROM "Products" WHERE name = 'Classic Cotton Tee' LIMIT 1), (SELECT id FROM "Files" WHERE key = 'products/tshirt1.jpg' LIMIT 1), 'MEDIUM', 'WHITE', 'FFFFFF', 80, now(), now()),
(gen_random_uuid(), (SELECT id FROM "Products" WHERE name = 'Performance Tee' LIMIT 1), (SELECT id FROM "Files" WHERE key = 'products/tshirt2.jpg' LIMIT 1), 'LARGE', 'ORANGE', 'FF0000', 60, now(), now()),
(gen_random_uuid(), (SELECT id FROM "Products" WHERE name = 'Premium Polo' LIMIT 1), (SELECT id FROM "Files" WHERE key = 'products/polo1.jpg' LIMIT 1), 'X_LARGE', 'BLUE', '0000FF', 40, now(), now()),
(gen_random_uuid(), (SELECT id FROM "Products" WHERE name = 'Thermal Long Sleeve' LIMIT 1), (SELECT id FROM "Files" WHERE key = 'products/longsleeve1.jpg' LIMIT 1), 'MEDIUM', 'GREEN', '00FF00', 30, now(), now());

-- 7. Roles Table (only Manager and Client)
INSERT INTO public."Roles" (id, name) VALUES
(gen_random_uuid(), 'Manager'),
(gen_random_uuid(), 'Client');

-- 8. Users Table
INSERT INTO public."Users" (id, nickname, first_name, last_name, email, password) VALUES
(gen_random_uuid(), 'jdoe', 'John', 'Doe', 'john.doe@example.com', '$2a$10$xJwL5v5Jz5z5z5z5z5z5zO'),
(gen_random_uuid(), 'asmith', 'Alice', 'Smith', 'alice.smith@example.com', '$2a$10$xJwL5v5Jz5z5z5z5z5z5zO'),
(gen_random_uuid(), 'bjohnson', 'Bob', 'Johnson', 'bob.johnson@example.com', '$2a$10$xJwL5v5Jz5z5z5z5z5z5zO'),
(gen_random_uuid(), 'cmiller', 'Carol', 'Miller', 'carol.miller@example.com', '$2a$10$xJwL5v5Jz5z5z5z5z5z5zO'),
(gen_random_uuid(), 'dwilson', 'David', 'Wilson', 'david.wilson@example.com', '$2a$10$xJwL5v5Jz5z5z5z5z5z5zO');

-- 9. UserRoles Table (assign roles)
INSERT INTO public."UserRoles" ("userId", "roleId") VALUES
((SELECT id FROM "Users" WHERE nickname = 'jdoe' LIMIT 1), (SELECT id FROM "Roles" WHERE name = 'Manager' LIMIT 1)),
((SELECT id FROM "Users" WHERE nickname = 'asmith' LIMIT 1), (SELECT id FROM "Roles" WHERE name = 'Client' LIMIT 1)),
((SELECT id FROM "Users" WHERE nickname = 'bjohnson' LIMIT 1), (SELECT id FROM "Roles" WHERE name = 'Client' LIMIT 1)),
((SELECT id FROM "Users" WHERE nickname = 'cmiller' LIMIT 1), (SELECT id FROM "Roles" WHERE name = 'Manager' LIMIT 1)),
((SELECT id FROM "Users" WHERE nickname = 'dwilson' LIMIT 1), (SELECT id FROM "Roles" WHERE name = 'Client' LIMIT 1));

-- 10. Likes Table
INSERT INTO public."Likes" ("productId", "user_id") VALUES
((SELECT id FROM "Products" WHERE name = 'Classic Cotton Tee' LIMIT 1), (SELECT id FROM "Users" WHERE nickname = 'asmith' LIMIT 1)),
((SELECT id FROM "Products" WHERE name = 'Performance Tee' LIMIT 1), (SELECT id FROM "Users" WHERE nickname = 'bjohnson' LIMIT 1)),
((SELECT id FROM "Products" WHERE name = 'Premium Polo' LIMIT 1), (SELECT id FROM "Users" WHERE nickname = 'asmith' LIMIT 1)),
((SELECT id FROM "Products" WHERE name = 'Thermal Long Sleeve' LIMIT 1), (SELECT id FROM "Users" WHERE nickname = 'dwilson' LIMIT 1)),
((SELECT id FROM "Products" WHERE name = 'Classic Cotton Tee' LIMIT 1), (SELECT id FROM "Users" WHERE nickname = 'cmiller' LIMIT 1));

-- 11. Carts Table
INSERT INTO public."Carts" (id, "user_id", "createdAt", "updatedAt") VALUES
(gen_random_uuid(), (SELECT id FROM "Users" WHERE nickname = 'asmith' LIMIT 1), now(), now()),
(gen_random_uuid(), (SELECT id FROM "Users" WHERE nickname = 'bjohnson' LIMIT 1), now(), now()),
(gen_random_uuid(), (SELECT id FROM "Users" WHERE nickname = 'dwilson' LIMIT 1), now(), now());

-- 12. CartDetails Table
INSERT INTO public."CartDetails" (id, quantity, price, "variant_id", "cart_id") VALUES
(gen_random_uuid(), 1, 24.99, (SELECT id FROM "Variants" WHERE size = 'SMALL' AND "product_id" = (SELECT id FROM "Products" WHERE name = 'Classic Cotton Tee' LIMIT 1) LIMIT 1), (SELECT id FROM "Carts" WHERE "user_id" = (SELECT id FROM "Users" WHERE nickname = 'asmith' LIMIT 1) LIMIT 1)),
(gen_random_uuid(), 2, 29.99, (SELECT id FROM "Variants" WHERE size = 'LARGE' AND "product_id" = (SELECT id FROM "Products" WHERE name = 'Performance Tee' LIMIT 1) LIMIT 1), (SELECT id FROM "Carts" WHERE "user_id" = (SELECT id FROM "Users" WHERE nickname = 'asmith' LIMIT 1) LIMIT 1)),
(gen_random_uuid(), 1, 39.99, (SELECT id FROM "Variants" WHERE size = 'X_LARGE' AND "product_id" = (SELECT id FROM "Products" WHERE name = 'Premium Polo' LIMIT 1) LIMIT 1), (SELECT id FROM "Carts" WHERE "user_id" = (SELECT id FROM "Users" WHERE nickname = 'bjohnson' LIMIT 1) LIMIT 1));

-- 13. Orders Table
INSERT INTO public."Orders" (id, "created_at", "user_id") VALUES
(gen_random_uuid(), now(), (SELECT id FROM "Users" WHERE nickname = 'asmith' LIMIT 1)),
(gen_random_uuid(), now(), (SELECT id FROM "Users" WHERE nickname = 'bjohnson' LIMIT 1)),
(gen_random_uuid(), now(), (SELECT id FROM "Users" WHERE nickname = 'dwilson' LIMIT 1));

-- 14. OrderDetails Table
INSERT INTO public."OrderDetails" (id, quantity, price, "orderDetails_id", "variant_id") VALUES
(gen_random_uuid(), 1, 24.99, (SELECT id FROM "Orders" WHERE "user_id" = (SELECT id FROM "Users" WHERE nickname = 'asmith' LIMIT 1) LIMIT 1), (SELECT id FROM "Variants" WHERE size = 'SMALL' AND "product_id" = (SELECT id FROM "Products" WHERE name = 'Classic Cotton Tee' LIMIT 1) LIMIT 1)),
(gen_random_uuid(), 2, 29.99, (SELECT id FROM "Orders" WHERE "user_id" = (SELECT id FROM "Users" WHERE nickname = 'asmith' LIMIT 1) LIMIT 1), (SELECT id FROM "Variants" WHERE size = 'LARGE' AND "product_id" = (SELECT id FROM "Products" WHERE name = 'Performance Tee' LIMIT 1) LIMIT 1)),
(gen_random_uuid(), 1, 39.99, (SELECT id FROM "Orders" WHERE "user_id" = (SELECT id FROM "Users" WHERE nickname = 'bjohnson' LIMIT 1) LIMIT 1), (SELECT id FROM "Variants" WHERE size = 'X_LARGE' AND "product_id" = (SELECT id FROM "Products" WHERE name = 'Premium Polo' LIMIT 1) LIMIT 1));

-- 15. Payments Table
INSERT INTO public."Payments" (id, "created_at", "updated_at", status, amount, currency, "receipt_url", "payment_intent", "orderId") VALUES
(gen_random_uuid(), now(), now(), 'completed', 54.98, 'USD', 'https://example.com/receipt/1', 'pi_' || gen_random_uuid(), (SELECT id FROM "Orders" WHERE "user_id" = (SELECT id FROM "Users" WHERE nickname = 'asmith' LIMIT 1) LIMIT 1)),
(gen_random_uuid(), now(), now(), 'completed', 39.99, 'USD', 'https://example.com/receipt/2', 'pi_' || gen_random_uuid(), (SELECT id FROM "Orders" WHERE "user_id" = (SELECT id FROM "Users" WHERE nickname = 'bjohnson' LIMIT 1) LIMIT 1));