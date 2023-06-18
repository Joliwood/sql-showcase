const dataMapper = require("../database/dataMapper");

const articleController = {
  async createArticle(req, res) {
    const { title, price, description, urlImage } = req.body;

    await dataMapper.createArticle(title, price, description, urlImage);
    res.redirect("back");
  },

  async deleteArticle(req, res) {
    await dataMapper.deleteArticle(req.body.id);
    res.redirect("back");
  },

  async modifyArticle(req, res) {
    const { id, title, price, description, urlImage } = req.body;
    await dataMapper.modifyArticle(id, title, price, description, urlImage);
    res.redirect("back");
  },
};

module.exports = articleController;
