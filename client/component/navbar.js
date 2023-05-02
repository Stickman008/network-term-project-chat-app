"use client";
import { picture_mapping, picture_paths } from "@/logic/picture";
import { getUser, logout } from "@/logic/user";
import { useEffect, useState } from "react";
import { BiChat, BiEditAlt } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { FiLogIn, FiLogOut } from "react-icons/fi";

export default function navbar(params) {
  const [icon, setIcon] = useState("/user.png");
  const [color, setColor] = useState("#FFFFFF");
  const [token, setToken] = useState(null);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setToken(token);
  });

  useEffect(() => {
    if (token) {
      getUser(token).then((result) => {
        // console.log(result);
        if (result) {
          // set username
          setUsername(result.nickname);
          // set icon
          setIcon(result.icon);
          // set color
          setColor(result.color);
        }
      });
    }
  }, [token]);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            <BiChat className="me-2" size={30} />
            Chat Network
          </a>
          <div className="d-inline-flex align-items-center m-0">
            {token ? (
              <>
                <img
                  src={icon}
                  width="30"
                  height="30"
                  className=""
                  style={{ backgroundColor: color, borderRadius: "60px" }}
                />
                <p className="d-inline-block mx-2 my-0 fs-5">{username}</p>
                <a className="navbar-brand" href="/edit">
                  <BiEditAlt className="me-2" size={30} />
                  Edit
                </a>
                <a className="navbar-brand" href="/" onClick={() => logout()}>
                  <FiLogOut className="me-2" size={30} />
                  Logout
                </a>
              </>
            ) : (
              <>
                <a className="navbar-brand" href="/login">
                  <FiLogIn className="me-2" size={30} />
                  Login
                </a>
                <a className="navbar-brand" href="/signup">
                  <BsPersonAdd className="me-2" size={30} />
                  Signup
                </a>
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
