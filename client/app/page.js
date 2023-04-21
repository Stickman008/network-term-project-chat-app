"use client";

import { useEffect } from "react";
import Navbar from "../component/navbar";

export default function Home() {
  useEffect(() => {
    console.log("working");
  });
  return (
    <>
      <Navbar />
      <p>home page</p>
      <a class="btn btn-success" href="/chat" role="button">real but cant not use</a>
      <a class="btn btn-secondary" href="/chat/:chat_id" role="button">not real but it working</a>
    </>
  );
}
