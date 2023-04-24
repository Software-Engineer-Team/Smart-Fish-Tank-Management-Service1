const express = require("express");
const router = express.Router();

const dataController = require("../controllers/data.controller");

router.get("/data/tempAll", dataController.getTemp);

module.exports = router;
