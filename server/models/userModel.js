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
    enum: [
      "ANONYMOUS", // Black
      "CAT", // Gray
      "DOG",  // Brown
      "BIRD", // Orange
      "FISH", // Blue
      "SUN", // Yellow
      "MOON", // Gray + White
      "ROSE", // Red
      "LAVENDER", // Purple
      "LEAF", // Green
      "RUBIK", // Blue + Red + Yellow
      "MUSIC",  // Rainbow
    ],
    default: "ANONYMOUS"
  }
}, {
  timeStamps: true,
});

module.exports = mongoose.model("User", userSchema);