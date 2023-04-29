const mongoose = require("mongoose");

const chatSchema = mongoose.Schema({
    chatName: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    latestMessage: {
        type: mongoose.Types.ObjectId,
        ref: "Message"
    },
}, {
    timeStamps: true,
});

module.exports = mongoose.model("Chat", chatSchema);
