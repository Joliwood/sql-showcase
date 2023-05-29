const client = require("./connection");

const dataMapper = {
  async getArticles(filter) {
    const query = `SELECT * FROM items ORDER BY ${filter}`;
    const results = await client.query(query);
    return results.rows;
  },

  async resetDb() {
    const query = `
    DROP TABLE IF EXISTS "items" CASCADE;

    CREATE TABLE items (
        "id" SERIAL PRIMARY KEY,
        "name" VARCHAR(128),
        "price" VARCHAR(128),
        "description" VARCHAR(255),
        "item_picture_url" VARCHAR(255)
    );
    
    INSERT INTO "items" ("name", "price", "description", "item_picture_url") VALUES 
    ('Café', '1,50€', 'Une tasse de café des plus classiques...', 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'),
    
    ('Café s"il vous plait', '1€', 'Une tasse de café préparée avec amour', 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'),
    
    ('Cafetière', '25€', 'Magnifique machine à café', 'https://m.media-amazon.com/images/I/61GR+XZqvOL._AC_SX342_SY445_.jpg');
    
    SELECT * FROM items
    `;
    const results = await client.query(query);
    return results.rows;
  },

  async createArticle(title, price, description, urlImage) {
    const query = `INSERT INTO items (name, price, description, item_picture_url) VALUES ('${title}', '${price}', '${description}', '${urlImage}')`;
    const results = await client.query(query);
    return results.rows;
  },

  async deleteArticle(id) {
    const query = `DELETE FROM items WHERE id = '${id}'`;
    const results = await client.query(query);
    return results.rows;
  },

  async modifyArticle(id, title, price, description, urlImage) {
    const query = `UPDATE items SET name = '${title}', price = '${price}', description = '${description}', item_picture_url = '${urlImage}' WHERE id = '${id}'`;
    const results = await client.query(query);
    return results.rows;
  },

  async filterArticles(filter) {
    const query = `SELECT * FROM items ORDER BY ${filter}`;
    const results = await client.query(query);
    return results.rows;
  },
};

module.exports = dataMapper;
