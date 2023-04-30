const express = require("express");
const router = express.Router();

const FeedingController = require("../controllers/feeding.controller");

router.get("/feeding/:user_id", FeedingController.getFeedings);

router.post("/feeding", FeedingController.postFeeding);

router.delete("/feeding/:id", FeedingController.deleteFeeding);

router.patch("/feeding", FeedingController.patchFeeding);

module.exports = router;
