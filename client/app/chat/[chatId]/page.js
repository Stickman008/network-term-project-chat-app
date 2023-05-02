"use client";

import Navbar from "../../../component/navbar";
// import Sidebar from "../../../component/sidebar";
// import Chatbox from "../../../component/Chatbox";
import Chat from "../../../component/Chat";
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation";
import "./page.css"
export default function page(params) {
  const [userId, setUserId] = useState("12345");
  const chatId = usePathname().split("/").at(-1);

  useEffect(() => {
    const paresString = async (string) => await JSON.parse(string);
    const user = localStorage.getItem("user");
    paresString(user)
      .then((userData) => {
        setUserId(userData._id);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Navbar />
      <div className="mt-2">
        {/* <div className="row">
          <div className="col-8 col-md-2 bg-white">
            <Sidebar userId={userId} />
          </div>
          <div className="col-8 mt-2 col-md-10 p-0">
            <Chat currentUserId={userId} chatId={chatId} />
          </div>
        </div> */}
        <Chat currentUserId={userId} chatId={chatId} />
      </div>
    </>
  );
}
