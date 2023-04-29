const router = require("express").Router();

// controller functions
const {
  signupUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
  getMe,
} = require("../controllers/userController");

const { requireAuth } = require("../middleware/auth");
router.use(requireAuth);

// GET all users
router.get("/", (req, res) => {
  res.json({ mssg: "GET all users" });
});

router.get("/me", getMe);

// get user
router.get("/:id", getUser);

// put user
router.put("/", updateUser);

// delete user
router.delete("/:id", deleteUser);

module.exports = router;
