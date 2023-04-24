"use client";

import Navbar from "../../../component/navbar";
import Sidebar from "../../../component/sidebar";
// import Chatbox from "../../../component/Chatbox";
import Chat from "../../../component/Chat";
import "./page.css"
export default function page(params) {
  return (
    <>
      <Navbar />
      <div className="mt-2">
        <div className="row">
          <div className="col-8 col-md-2 bg-white">
            <Sidebar userId="12345" />
          </div>
          <div className="col-8 mt-2 col-md-10 p-0">
            <Chat currentUserId="12345" chatId="67890" />
          </div>
        </div>
      </div>
    </>
  );
}
