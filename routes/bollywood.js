const express = require("express");
const { getData } = require("../controllers/getData")
const bollywoodRouter = express.Router();

bollywoodRouter.route("/details")
    .get(getData);


module.exports = bollywoodRouter;