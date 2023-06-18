const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const articleController = require("../controllers/articleController");
const searchController = require("../controllers/searchController");

router.get("/", homeController.homePage);

router.post("/createArticle", articleController.createArticle);

router.post("/deleteArticle", articleController.deleteArticle);

router.post("/modifyArticle", articleController.modifyArticle);

router.post("/resetdb", homeController.resetDb);

router.post("/", homeController.filterDb);

router.post("/search", searchController.search);

module.exports = router;
