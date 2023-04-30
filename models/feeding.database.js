const mongoose = require("mongoose");

const FeedingSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
    hour: {
      type: Number,
      require: true,
    },
    minute: {
      type: Number,
      require: true,
    },
    level: { type: Number, require: true },
  },
  {
    timestamps: false,
    collection: "feeding",
  }
);
module.exports = mongoose.model("Feeding", FeedingSchema);
