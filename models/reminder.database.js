const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
    title: { type: String, require: true },
  },
  {
    timestamps: false,
    collection: "reminder",
  }
);
module.exports = mongoose.model("Reminder", ReminderSchema);
