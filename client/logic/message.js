const {API_HOST} = require("../config/index")
const API_URL = `${API_HOST}/api/message`;

// fetch message
const fetchMessages = async (chatId) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/${chatId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  })
  const result = await response.json();
  if (!response.ok) {
    console.log(result);
    return null;
  } else {
    return result;
  }
};

// send message
const sendMessage = async (userId, chatId, mess) => {
  // console.log({userId, chatId, mess});
  const token = localStorage.getItem("token");
  await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      content: mess,
      chatId: chatId,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to save message to database");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
};


module.exports = { fetchMessages, sendMessage };
