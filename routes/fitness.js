const express = require("express");
const { getData } = require("../controllers/getData")
const fitnessRouter = express.Router();

fitnessRouter.route("/details")
    .get(getData);


module.exports = fitnessRouter;