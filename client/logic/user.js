const API_URL = "http://localhost:5000/api/auth";
const USER_API_URL = "http://localhost:5000/api/user";

const register = async (userData) => {
  const respone = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await respone.json();
  if (!respone.ok) {
    console.log(result);
    return false;
  } else {
    return true;
  }
};

const login = async (userData) => {
  const respone = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  const result = await respone.json();

  if (!respone.ok) {
    return false;
  } else {
    localStorage.setItem("token", result.token);
    return true;
  }
};

const logout = () => {
  localStorage.removeItem("token");
};

const getUsers = async (p) => {
  // console.log("getUsers");
  const token = localStorage.getItem("token");
  const respone = await fetch(`${USER_API_URL}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await respone.json();
  if (!respone.ok) {
    return false;
  } else {
    return result.result;
  }
};

const getUser = async (token) => {
  const respone = await fetch(`${USER_API_URL}/me`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await respone.json();
  if (!respone.ok) {
    return false;
  } else {
    return result;
  }
};

const updateUser = async (userData) => {
  console.log(userData);
  const token = localStorage.getItem("token");
  const respone = await fetch(`${USER_API_URL}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });

  const result = await respone.json();
  if (!respone.ok) {
    return false;
  } else {
    return result;
  }
};

module.exports = { register, login, logout, getUsers, getUser, updateUser };
