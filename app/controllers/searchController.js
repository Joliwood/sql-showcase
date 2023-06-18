const dataMapper = require("../database/dataMapper");

const searchController = {
  async search(req, res) {
    try {
      const searchTerm = req.body.q;

      const itemsList = await dataMapper.search(searchTerm);

      res.render("index", { itemsList });
    } catch (error) {
      console.error("Erreur pendant l'étape de recherceh", error);
      res.status(500).send("Aucun élément ne correspond à votre recherche");
    }
  },
};

module.exports = searchController;
