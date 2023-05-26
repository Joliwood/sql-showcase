const dataMapper = require("../database/dataMapper");

const articleController = {
  async createArticle(req, res) {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const urlImage = req.body.urlImage;

    await dataMapper.createArticle(title, price, description, urlImage);
    res.redirect("back");
  },

  async deleteArticle(req, res) {
    await dataMapper.deleteArticle(req.body.id);
    res.redirect("back");
  },
};

module.exports = articleController;
