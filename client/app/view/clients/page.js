"use client";
import Navbar from "../../../component/navbar";
import { useEffect, useState } from "react";

export default function page(params) {
  // pagination variable
  const [p, setP] = useState(1);
  // const [data, setData] = useState(null);
  const [isnewPage, setIsnewPage] = useState(true);

  useEffect(() => {
    // if (!localStorage.getItem("token")) {
    //   alert("please login");
    //   window.location.href = "/login";
    //   return;
    // }
    setP(1);
  }, []);

  useEffect(() => {
    if (isnewPage) {
      // getOwnerRestaurants(p).then((result) => {
      //   setData(result.data);
      // });
    }
    setIsnewPage(false);
  }, [p, isnewPage]);

  const movepage = (page) => {
    if (page > 0) {
      const value = parseInt(page);
      if (value !== p) setIsnewPage(true);
      setP(value);
    }
  };

  const chatHandler = () => {
    console.log("chat");
  };

  return (
    <>
      <Navbar />
      <div className="card bg-light my-2 mx-auto" style={{ width: "50rem" }}>
        <h5 className="card-header">value.name</h5>
        <div className="d-flex justify-content-end">
          <div className="card-body py-2 " style={{ maxWidth: "85%" }}>
            <p className="card-text my-0">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
                width="30"
                height="30"
                className="me-2"
                style={{ backgroundColor: "yellow", borderRadius: "15px" }}
              />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Adipisci, impedit.
            </p>
          </div>
          <button
            type="button"
            className="btn btn-outline-primary ms-auto me-1 my-2"
            style={{ height: "50px" }}
            onClick={() => chatHandler()}
          >
            Chat
          </button>
        </div>
      </div>
      <nav className="my-2" aria-label="Page navigation example">
        <ul
          className="pagination justify-content-end "
          style={{ marginRight: "1cm" }}
        >
          <li className="page-item me-2">
            <a className="btn btn-dark" onClick={() => movepage(p - 1)}>
              Previous
            </a>
          </li>
          <li className="page-item disabled me-2">
            <a className="page-link">Current Page : {p}</a>
          </li>
          <li className="page-item me-2">
            <a className="btn btn-dark" onClick={() => movepage(p + 1)}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
