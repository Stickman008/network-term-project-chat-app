"use client";

import { useEffect } from "react";
import Navbar from "../component/navbar";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsChatDots } from "react-icons/bs";
import { fetchChats } from "@/logic/chat";

export default function Home() {
  const homeHandler = async (path) => {
    const token = localStorage.getItem("token");
    if (!token) alert("please login to use features");
    if (path === "/chat") {
      // const chatId = "1234";
      const chat = await fetchChats();
      if (chat) {
        console.log(chat);
        const chatId = chat[0]._id
        window.location.href = `${path}/${chatId}`;
      }
    } else {
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
              <p className="m-0">
                <AiOutlineUser className="me-2" size={30} />
                View Clients List
              </p>
            </div>
          </div>
          <div className="d-block">
            <div
              className="btn btn-dark btn-md btn-block my-1"
              style={{ width: "20rem" }}
              onClick={() => homeHandler("/view/groups")}
            >
              <p className="m-0">
                <HiOutlineUserGroup className="me-2" size={30} />
                View Group List
              </p>
            </div>
          </div>
          <div className="d-block">
            <div
              className="btn btn-outline-dark btn-md btn-block my-1"
              style={{ width: "20rem" }}
              onClick={() => homeHandler("/chat")}
            >
              <p className="m-0">
                <BsChatDots className="me-2" size={30} />
                Go To Chat
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
