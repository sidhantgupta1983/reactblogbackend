const express = require("express");
const getData = require("../controllers/getData")
const homeRouter = express.Router();

homeRouter.route("/details")
    .get(getData);
homeRouter.route("/details/category/:id")
    .get(getData);


module.exports = homeRouter;