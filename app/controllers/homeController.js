const dataMapper = require("../database/dataMapper");

const homeController = {
  async homePage(req, res) {
    const itemsList = await dataMapper.getItems();
    res.render("../views/index", { itemsList });
  },
};

module.exports = homeController;
