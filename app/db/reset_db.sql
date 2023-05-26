DROP TABLE IF EXISTS "items";

CREATE TABLE items (
    "id" INT PRIMARY KEY NOT NULL,
    "name" VARCHAR(128),
    "price" VARCHAR(128),
    "description" VARCHAR(255),
    "item_picture_url" VARCHAR(255)
);

INSERT INTO "items" ("name", "price", "description", "item_picture_url") VALUES 
('Café', '1,50€', 'Une tasse de café des plus classiques...', 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),

('Café s"il vous plait', '1€', 'Une tasse de café préparée avec amour', 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),

('Cafetière', '25', 'Magnifique machine à café', 'https://m.media-amazon.com/images/I/61GR+XZqvOL._AC_SX342_SY445_.jpg')