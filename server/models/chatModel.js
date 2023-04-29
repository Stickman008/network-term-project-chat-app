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

// retrieve a chat based on the unique identifiers of two users
// use the user_id_1 and user_id_2 values to retrieve the chat between the two users
chatSchema.statics.findChatByUser = async function (user_id_1, user_id_2) {
    let chat = null;
    chat = await this.findOne({users : [user_id_1,user_id_2]});
    // if (!chat) {
    //   chat = await this.findOne({
    //     organizer: user_id_2,
    //     musician: user_id_1,
    //   });
    // }
    return chat;
  };

module.exports = mongoose.model("Chat", chatSchema);
