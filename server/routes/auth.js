const router = require("express").Router();

// controller functions
const { signupUser, loginUser } = require("../controllers/userController");

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

module.exports = router;