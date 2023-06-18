const dataMapper = require("../database/dataMapper");

const homeController = {
  async homePage(req, res) {
    let filter = "id";
    const itemsList = await dataMapper.getArticles(filter);
    res.render("index", { itemsList });
  },

  async resetDb(req, res) {
    await dataMapper.resetDb();
    res.redirect("back");
  },

  async filterDb(req, res) {
    let filter = req.body.filter;
    const itemsList = await dataMapper.filterArticles(filter);
    res.render("index", { itemsList });
  },
};

module.exports = homeController;
