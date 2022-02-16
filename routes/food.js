const express = require("express");
const { getData } = require("../controllers/getData")
const foodRouter = express.Router();

foodRouter.route("/details")
    .get(getData);


module.exports = foodRouter;