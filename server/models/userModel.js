const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    enum: ["ANONYMOUS", "CAT", "DOG", "BIRD", "TREE"],
    default: "ANONYMOUS"
  }
}, {
  timeStamps: true,
});

module.exports = mongoose.model("User", userSchema);