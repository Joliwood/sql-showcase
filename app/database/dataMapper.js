const client = require("./connection");

const dataMapper = {
  async getItems() {
    const query = "SELECT * FROM items";
    const results = await client.query(query);
    return results.rows;
  },
};

module.exports = dataMapper;
