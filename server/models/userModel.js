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
  name: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
  }
}, {
  timeStamps: true,
});

module.exports = mongoose.model("User", userSchema);