const dataMapper = require("../database/dataMapper");

const homeController = {
  async homePage(req, res) {
    let filter = "id";
    const itemsList = await dataMapper.getArticles(filter);
    res.render("../views/index", { itemsList });
  },

  async resetDb(req, res) {
    await dataMapper.resetDb();
    res.redirect("back");
  },

  async filterDb(req, res) {
    const filter = req.body.filter;
    let itemsList = await dataMapper.filterArticles(filter);
    res.render("../views/index", { itemsList });
  },
};

module.exports = homeController;
