const API_URL = "http://localhost:5000/api/chat";

const accessChat = async (userId) => {
  const token = localStorage.getItem("token");
  const respone = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ userId }),
  });

  const result = await respone.json();
  if (!respone.ok) {
    console.log(result);
    return false;
  } else {
    return result;
  }
};

const fetchChats = async () => {
  const token = localStorage.getItem("token");

  const respone = await fetch(`${API_URL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await respone.json();
  if (!respone.ok) {
    console.log(result);
    return false;
  } else {
    return result;
  }
};

const createGroupChat = async (chatName) => {
  const token = localStorage.getItem("token");

  const respone = await fetch(`${API_URL}/group`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ chatName }),
  });

  const result = await respone.json();
  if (!respone.ok) {
    console.log(result);
    return false;
  } else {
    return result;
  }
};

const getGroupChats = async () => {
  const token = localStorage.getItem("token");

  const respone = await fetch(`${API_URL}/group`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await respone.json();
  if (!respone.ok) {
    console.log(result);
    return false;
  } else {
    return result;
  }
};

module.exports = { accessChat, fetchChats, createGroupChat, getGroupChats };
