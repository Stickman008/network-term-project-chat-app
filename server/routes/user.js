const router = require("express").Router();

// controller functions
const {
  signupUser,
  loginUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers
} = require("../controllers/userController");

const { requireAuth } = require("../middleware/auth");
router.use(requireAuth)

// GET all users
// router.get("/", (req, res) => {
//   res.json({ mssg: "GET all users" });
// });

//get all users
router.get("/", getUsers);

// get user
router.get("/:id", getUser);

// put user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

module.exports = router
