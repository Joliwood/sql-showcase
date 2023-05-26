const dataMapper = require("../database/dataMapper");

const homeController = {
  async homePage(req, res) {
    const itemsList = await dataMapper.getArticles();
    res.render("../views/index", { itemsList });
  },

  async resetDb(req, res) {
    await dataMapper.resetDb();
    res.redirect("back");
  },
};

module.exports = homeController;
