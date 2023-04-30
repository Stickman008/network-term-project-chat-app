"use client";
import Navbar from "../../../component/navbar";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { accessChat, createGroupChat, getGroupChats } from "@/logic/chat";

export default function page(params) {
  const [data, setData] = useState(null);
  const [isNewgroup, setIsNewgroup] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("please login");
      window.location.href = "/login";
      return;
    }
    getGroupChats().then((result) => {
      if (result) {
        setData(result);
      }
    });
  }, []);

  useEffect(() => {
    if (isNewgroup) {
      // get all group
      getGroupChats().then((result) => {
        if (result) {
          setData(result);
        }
      });
    }
    setIsNewgroup(false);
  }, [isNewgroup]);

  const chatHandler = (chat_id) => {
    // console.log(user_id);
    window.location.href = `/chat/${chat_id}`;
  };

  // modal variable
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");
  const handleCloseModal = () => {
    if (name !== "") {
      createGroupChat(name)
        .then((result) => {
          // console.log(result);
          if (result) {
            setIsNewgroup(true);
          } else {
            alert("create group unsucessful");
          }
        })
        .catch((err) => {
          alert(err);
        });
    }
    setName("");
    setActive(false);
  };
  const handleShowModal = () => {
    setActive(true);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex flex-row-reverse bd-highlight my-3 me-5">
        <button
          type="button"
          className="btn btn-success fs-4 p-1"
          onClick={() => handleShowModal()}
        >
          <AiOutlineUsergroupAdd size={30} />
          Create New Group
        </button>
      </div>
      {data &&
        data.map((group) => {
          console.log(group);
          return (
            <>
              <div
                className="card bg-light my-2 mx-auto"
                style={{ width: "50rem" }}
              >
                <h5 className="card-header">{group.chatName}</h5>
                <div className="d-flex justify-content-end">
                  <div className="card-body py-2 " style={{ maxWidth: "85%" }}>
                    <p className="card-text my-0">
                      Please Join Our Group Chat!!!
                    </p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-primary ms-auto me-1 my-2"
                    style={{ height: "50px" }}
                    onClick={() => chatHandler(group._id)}
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

      <Modal show={active} onHide={handleCloseModal}>
        <Modal.Header closeButton id="head">
          <Modal.Title>Create Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            className="from_box"
            key="eventForm"
            style={{ flex: 1, paddingLeft: "10px" }}
          >
            <div className="form-group">
              <label className="my-1">Group Name</label>
              <input
                type="text"
                className="form-control"
                id="Inputname"
                onChange={(event) => setName(event.target.value)}
                value={name}
              />
            </div>
            <button
              className="btn btn-dark my-2"
              onClick={() => {
                handleCloseModal();
              }}
            >
              Submit
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
