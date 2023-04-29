"use client";
import { getUsers } from "@/logic/user";
import Navbar from "../../../component/navbar";
import { useEffect, useState } from "react";
import { accessChat } from "@/logic/chat";

export default function page(params) {
  // pagination variable
  // const [p, setP] = useState(1);
  const [data, setData] = useState(null);
  // const [isnewPage, setIsnewPage] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("please login");
      window.location.href = "/login";
      return;
    }
    getUsers().then((result) => {
      if (result) {
        setData(result);
      }
    });
    // setP(1);
  }, []);

  // useEffect(() => {
  //   if (isnewPage) {
  //     getUsers(p).then((result) => {
  //       console.log(result);
  //       // setData(result.data);
  //     });
  //   }
  //   setIsnewPage(false);
  // }, [p, isnewPage]);

  // const movepage = (page) => {
  //   if (page > 0) {
  //     const value = parseInt(page);
  //     if (value !== p) setIsnewPage(true);
  //     setP(value);
  //   }
  // };

  const chatHandler = (user_id) => {
    // console.log(user_id);
    accessChat(user_id).then((result) => {
      if (result) {
        window.location.href = `/chat/${result._id}`;
      }
      else{
        alert("Can not create this chatroom")
      }
    });
  };

  return (
    <>
      <Navbar />
      {data &&
        data.map((user, i) => {
          return (
            <>
              <div
                className="card bg-light my-2 mx-auto"
                style={{ width: "50rem" }}
                key={`card_#${i}`}
              >
                <h5 className="card-header" key={`card_header#${i}`}>
                  {user.nickname}
                </h5>
                <div
                  className="d-flex justify-content-end"
                  key={`card_content_#${i}`}
                >
                  <div
                    className="card-body py-2 "
                    style={{ maxWidth: "85%" }}
                    key={`card_body_#${i}`}
                  >
                    <p className="card-text my-0" key={`p_text#${i}`}>
                      <img
                        src={user.icon}
                        width="30"
                        height="30"
                        className="me-2"
                        style={{
                          backgroundColor: user.color,
                          borderRadius: "15px",
                        }}
                        key={`img_user#${i}`}
                      />
                      Let's start our chat together !!!!
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary ms-auto me-1 my-2"
                    style={{ height: "50px" }}
                    onClick={() => chatHandler(user._id)}
                    key={`chat#${i}`}
                  >
                    Chat
                  </button>
                </div>
              </div>
            </>
          );
        })}

      {/* <nav className="my-2" aria-label="Page navigation example">
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
      </nav> */}
    </>
  );
}
