const express = require("express");
const router = express.Router();

const reminderController = require("../controllers/reminder.controller");

router.get("/reminder/:user_id", reminderController.getReminders);

router.post("/reminder", reminderController.postReminders);

router.delete("/reminder/:id", reminderController.deleteReminder);

module.exports = router;
