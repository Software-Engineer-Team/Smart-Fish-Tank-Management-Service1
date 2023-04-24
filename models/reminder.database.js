const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
    date: {
      type: Date,
      require: true,
    },
    title: { type: String, require: true },
    description: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: false,
    collection: "reminder",
  }
);
module.exports = mongoose.model("Reminder", ReminderSchema);
