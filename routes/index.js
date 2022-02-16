const express = require("express");
const homeRouter = require("./home");
const bollywoodRouter = require("./bollywood");
const technologyRouter = require("./technology");
const hollywoodRouter = require("./hollywood");
const fitnessRouter = require("./fitness");
const foodRouter = require("./food");


const router = express.Router();

router.use("/home", homeRouter);
router.use("/bollywood", bollywoodRouter);
router.use("/technology", technologyRouter);
router.use("/hollywood", hollywoodRouter);
router.use("/fitness", fitnessRouter);
router.use("/food", foodRouter);

module.exports = router;