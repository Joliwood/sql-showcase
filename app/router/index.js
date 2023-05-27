const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const articleController = require("../controllers/articleController");

router.get("/", homeController.homePage);

router.post("/createArticle", articleController.createArticle);

router.post("/deleteArticle", articleController.deleteArticle);

router.post("/modifyArticle", articleController.modifyArticle);

router.post("/resetdb", homeController.resetDb);

module.exports = router;
