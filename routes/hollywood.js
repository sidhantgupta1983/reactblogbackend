const express = require("express");
const getData = require("../controllers/getData")
const hollywoodRouter = express.Router();

hollywoodRouter.route("/details")
    .get(getData);
hollywoodRouter.route("/details/category/:id")
    .get(getData);


module.exports = hollywoodRouter;