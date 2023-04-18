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
    </>
  );
}
