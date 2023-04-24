const API_URL = "http://localhost:5000/api/auth";

const updateUser = async (userData) => {
  console.log(userData);
};

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
  localStorage.setItem("token", null);
};

module.exports = { updateUser, register, login, logout };
