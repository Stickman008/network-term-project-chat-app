"use client";

import { useState } from "react";
import Navbar from "../../component/navbar";
import { login } from "@/logic/user";
export default function page(params) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async () => {
    const result = await login({ email, password });
    if (result) {
      alert("login complete");
      window.location.href = "/";
    } else {
      alert("login unsuccessful");
    }
    console.log({ email, password });
  };

  return (
    <>
      <Navbar />
      <div className="container-lg">
        <div className="card mt-5 mx-auto" style={{ width: "45rem" }}>
          <div className="card-header"></div>
          <div className="card-body">
            <h5 className="card-title text-center">Login Form</h5>
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
            <button
              type="button"
              className="btn btn-outline-success d-block mx-auto"
              onClick={() => submit()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
