const express = require("express");
const getData = require("../controllers/getData")
const bollywoodRouter = express.Router();

bollywoodRouter.route("/details")
    .get(getData);
bollywoodRouter.route("/details/category/:id").get(getData);

module.exports = bollywoodRouter;