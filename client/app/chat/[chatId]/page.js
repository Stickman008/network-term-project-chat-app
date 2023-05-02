"use client";

import Navbar from "../../../component/navbar";
// import Sidebar from "../../../component/sidebar";
// import Chatbox from "../../../component/Chatbox";
import Chat from "../../../component/Chat";
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import "./page.css"
import { getUser } from "@/logic/user";
export default function page(params) {
  const [userId, setUserId] = useState("12345");
  const chatId = usePathname().split("/").at(-1);

  useEffect(() => {
    const paresString = async (string) => await JSON.parse(string);
    const token = localStorage.getItem("token");
    // paresString(user)
    //   .then((userData) => {
    //     setUserId(userData._id);
    //   })
    //   .catch(console.error);
    getUser(token).then((userData) => {
      if (userData) {
        setUserId(userData._id) ;
      }
      else {
        alert("please login!!!") ;
        window.location.href = "/login"
      }
    })
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-2">
        <div className="row">
          {/* <div className="col-8 col-md-2 bg-white">
            <Sidebar userId={userId} />
          </div> */}
          <div className="col-12 mt-2 p-0">
            <Chat currentUserId={userId} chatId={chatId} />
          </div>
        </div>
      </div>
    </>
  );
}
