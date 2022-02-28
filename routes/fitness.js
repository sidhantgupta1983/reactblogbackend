const express = require("express");
const getData = require("../controllers/getData")
const fitnessRouter = express.Router();

fitnessRouter.route("/details")
    .get(getData);
fitnessRouter.route("/details/category/:id")
    .get(getData);


module.exports = fitnessRouter;