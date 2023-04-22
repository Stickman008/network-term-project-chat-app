"use client";

import { useEffect } from "react";
import Navbar from "../component/navbar";

export default function Home() {

  const homeHandler = async (path) => {
    // const token = localStorage.getItem("token");
    // if (!token) alert("please login to use features");
    // else {
      // const result = await getUser(token);
      // if (result.success) {
        if (path === "/chat"){
          const chatId = "1234"
          window.location.href = `${path}/${chatId}`;
        } 
        else{
          window.location.href = path;
        }
      // } else {
        // alert("please login again");
      // }
    // }
  };

  return (
    <>
      <Navbar />
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">Chat Me: A Realtime</h1>
          <h1 className="caard-title">Chat System</h1>
          <p className="card-text">Please choose from an option below</p>
          <div className="d-block">
            <div
              className="btn btn-outline-dark btn-md btn-block my-1"
              style={{ width: "20rem" }}
              onClick={() => homeHandler("/view/clients")}
            >
              <p className="m-0">View Clients List</p>
            </div>
          </div>
          <div className="d-block">
            <div
              className="btn btn-dark btn-md btn-block my-1"
              style={{ width: "20rem" }}
              onClick={() => homeHandler("/view/groups")}
            >
              <p className="m-0">View Group List</p>
            </div>
          </div>
          <div className="d-block">
            <div
              className="btn btn-outline-dark btn-md btn-block my-1"
              style={{ width: "20rem" }}
              onClick={() => homeHandler("/chat")}
            >
              <p className="m-0">Go To Chat</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
