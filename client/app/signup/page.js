"use client";
import { useState } from "react";
import Navbar from "../../component/navbar";
import { register } from "@/logic/user";
export default function page(params) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("default");
  const [color, setColor] = useState("#FFFFFF");

  const submit = async (e, userData) => {
    e.preventDefault();
    // const result = await register(userData);
    console.log(userData);
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
              onSubmit={(e) => submit(e, { email, password, name, pic, color })}
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
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  required
                />
              </div>
              <div className="mb-1">
                <label className="form-label">Profile Picture</label>
              </div>
              <div className="mb-3 d-flex justify-content-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                  width="80"
                  height="80"
                  className=""
                  style={{ backgroundColor: color, "border-radius": "100px" }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Picture</label>
                <select
                  name="pic"
                  id="form4"
                  className="form-select form-select-md"
                  onChange={(event) => setPic(event.target.value)}
                  value={pic}
                >
                  <option value="default">Default</option>
                  <option value="cat">Cat</option>
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
