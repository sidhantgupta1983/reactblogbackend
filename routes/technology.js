const express = require("express");
const { getData } = require("../controllers/getData")
const technologyRouter = express.Router();

technologyRouter.route("/details")
    .get(getData);


module.exports = technologyRouter;