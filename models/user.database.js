const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    ada_key: { type: String, require: true },
  },
  {
    timestamps: false,
    collection: "user",
  }
);
module.exports = mongoose.model("User", UserSchema);
