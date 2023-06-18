BEGIN;

DROP TABLE IF EXISTS "items";

CREATE TABLE items (
    "id" INT PRIMARY KEY NOT NULL,
    "name" TEXT,
    "price" DECIMAL,
    "description" TEXT,
    "item_picture_url" TEXT
);

INSERT INTO "items" ("name", "price", "description", "item_picture_url") VALUES 
('Café', '1.50', 'Une tasse de café des plus classiques...', 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),

('Café s''il vous plait', '1', 'Une tasse de café préparée avec amour. Vous retrouverez le goût de votre café préféré', 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),

('Cafetière', '25', 'Magnifique machine à café', 'https://m.media-amazon.com/images/I/61GR+XZqvOL._AC_SX342_SY445_.jpg'),

('Voiture', '1750', 'Superbe voiture de notre temps', 'https://us.123rf.com/450wm/yupiramos/yupiramos1801/yupiramos180126206/94440624-voiture-v%C3%A9hicule-isol%C3%A9-conception-d-ic%C3%B4ne-vector-illustration.jpg?ver=6'),

('Orange', '4.25', 'Orange basique et pas cher (pour Paris intramuros !)', 'https://www.lesproduitsnaturels.com/userfiles/www.lesproduitsnaturels.com/images/orange.jpg');

COMMIT;