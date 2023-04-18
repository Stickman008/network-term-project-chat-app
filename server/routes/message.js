const router = require("express").Router();

// controller functions
const {
  allMessages,
  sendMessage,
} = require("../controllers/messageController");

const { requireAuth } = require("../middleware/auth");
router.use(requireAuth);

// fetech chats
router.get("/:chatId", allMessages);

// send message
router.post("/", sendMessage);

module.exports = router;
