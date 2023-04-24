"use client";
import { useState } from "react";
import Navbar from "../../component/navbar";
import { register } from "@/logic/user";
import { picture_mapping, picture_paths } from "@/logic/picture";

export default function page(params) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [icon, setIcon] = useState("/user.png");
  const [color, setColor] = useState("#FFFFFF");

  const submit = async (e, userData) => {
    e.preventDefault();
    const result = await register(userData);
    if (result) {
      alert("register complete");
      window.location.href = "/login";
    } else {
      alert("register unsuccessful");
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-lg">
        <div className="card mt-5 mx-auto" style={{ width: "45rem" }}>
          <div className="card-header"></div>
          <div className="card-body">
            <h5 className="card-title text-center">Signup Form</h5>
            <form
              onSubmit={(e) =>
                submit(e, { email, password, nickname, icon, color })
              }
            >
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  id="form1"
                  className="form-control form-control-md"
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  id="form2"
                  className="form-control form-control-md"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Nickname</label>
                <input
                  type="text"
                  id="form3"
                  className="form-control form-control-md"
                  onChange={(event) => setNickname(event.target.value)}
                  value={nickname}
                  required
                />
              </div>
              <div className="mb-1">
                <label className="form-label">Profile Picture</label>
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <img
                  src={icon}
                  width="80"
                  height="80"
                  className=""
                  style={{ backgroundColor: color, "border-radius": "60px" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Picture</label>
                <select
                  name="pic"
                  id="form4"
                  className="form-select form-select-md"
                  onChange={(event) => setIcon(event.target.value)}
                  value={icon}
                >
                  {picture_paths().map((path, i) => {
                    return (
                      <option key={`option${i}`} value={path}>
                        {picture_mapping(path)}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Color</label>
                <input
                  type="color"
                  id="form5"
                  className="form-control form-control-md"
                  onChange={(event) => setColor(event.target.value)}
                  value={color}
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-success d-block mx-auto"
              >
                Signup
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
