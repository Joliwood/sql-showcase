const client = require("./connection");

const dataMapper = {
  async getArticles(filter) {
    const query = `SELECT * FROM items ORDER BY ${filter}`;
    const { rows } = await client.query(query);
    return rows;
  },

  async resetDb() {
    const query = `
    DROP TABLE IF EXISTS "items" CASCADE;

    CREATE TABLE items (
        "id" SERIAL PRIMARY KEY,
        "name" TEXT,
        "price" DECIMAL,
        "description" TEXT,
        "item_picture_url" TEXT
    );
    
    INSERT INTO "items" ("name", "price", "description", "item_picture_url") VALUES 
    ('Café', '1.50', 'Une tasse de café des plus classiques...', 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
    
    ('Café s''il vous plait', '1', 'Une tasse de café préparée avec amour. Vous retrouverez le goût de votre café préféré', 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'),
    
    ('Cafetière', '25', 'Magnifique machine à café', 'https://m.media-amazon.com/images/I/61GR+XZqvOL._AC_SX342_SY445_.jpg'),

    ('Voiture', '1750', 'Superbe voiture de notre temps', 'https://us.123rf.com/450wm/yupiramos/yupiramos1801/yupiramos180126206/94440624-voiture-v%C3%A9hicule-isol%C3%A9-conception-d-ic%C3%B4ne-vector-illustration.jpg?ver=6'),

    ('Orange', '4.25', 'Orange basique et pas cher (pour Paris intramuros !)', 'https://www.lesproduitsnaturels.com/userfiles/www.lesproduitsnaturels.com/images/orange.jpg');
    
    SELECT * FROM items
    `;
    const { rows } = await client.query(query);
    return rows;
  },

  async createArticle(title, price, description, urlImage) {
    const query = `
      INSERT INTO items (name, price, description, item_picture_url)
      VALUES ($1, $2, $3, $4)
    `;
    const values = [title, price, description, urlImage];
    const { rows } = await client.query(query, values);
    return rows;
  },

  async deleteArticle(id) {
    const query = `DELETE FROM items WHERE id = $1`;
    const values = [id];
    const { rows } = await client.query(query, values);
    return rows;
  },

  async modifyArticle(id, title, price, description, urlImage) {
    const query = `
      UPDATE items
      SET name = $1, price = $2, description = $3, item_picture_url = $4
      WHERE id = $5
    `;
    const values = [title, price, description, urlImage, id];
    const { rows } = await client.query(query, values);
    return rows;
  },

  async filterArticles(filter) {
    const query = `SELECT * FROM items ORDER BY ${filter}`;
    const { rows } = await client.query(query);
    return rows;
  },

  async search(searchTerm) {
    const query = `
      SELECT * 
      FROM items 
      WHERE name ILIKE $1 OR description ILIKE $1
      ORDER BY name
    `;
    const values = [`%${searchTerm}%`];
    const results = await client.query(query, values);
    return results.rows;
  },
};

module.exports = dataMapper;
