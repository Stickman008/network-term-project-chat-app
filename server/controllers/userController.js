require("dotenv").config();
const User = require("../models/userModel");
const { sendTokenResponse } = require("../middleware/auth");
const bcrypt = require("bcrypt");
const validator = require("validator");
const mongoose = require("mongoose");

// login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    sendTokenResponse(user, 200, res);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// signup a user
const signupUser = async (req, res) => {
  const { email, password, nickname, icon, color } = req.body;

  try {
    const user = await User.signup(email, password, {
      nickname,
      icon,
      color,
    });

    sendTokenResponse(user, 200, res);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get a user
const getUser = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.isValidObjectId(id)) {
      throw Error("Invalid Id");
    }

    const user = await User.findById(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// edit a user
const updateUser = async (req, res) => {
  const id = req.user._id;
  try {
    if (!mongoose.isValidObjectId(id)) {
      throw Error("Invalid Id");
    }

    // update user
    const new_user = await User.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });

    res.status(200).json(new_user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a user
const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    if (!mongoose.isValidObjectId(id)) {
      throw Error("Invalid Id");
    }
    const user = await User.findByIdAndDelete(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// get me
const getMe = async (req, res) => {
  const id = req.user._id;
  try {
    if (!mongoose.isValidObjectId(id)) {
      throw Error("Invalid Id");
    }
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  signupUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
  getMe,
};
