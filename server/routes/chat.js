const router = require("express").Router();

// controller functions
const {
  fetchChats,
  accessChat,
  getChat,
  deleteChat,
  updateChat,
  createGroupChat
} = require("../controllers/chatController");

const { requireAuth } = require("../middleware/auth");
router.use(requireAuth);

// access chat
router.post("/", accessChat);

// fetch chats
router.get("/", fetchChats);

// get chat
router.get("/:id", getChat);

// delete chat
router.delete("/:id", deleteChat);

// update chat
router.put("/:id", updateChat);

//create group chat
router.post("/group", createGroupChat);


module.exports = router;
