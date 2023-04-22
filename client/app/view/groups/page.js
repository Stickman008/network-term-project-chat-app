"use client";
import Navbar from "../../../component/navbar";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

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

  // modal variable
  const [active, setActive] = useState(false);
  // const [selectData, setSelectData] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const handleCloseModal = () => {
    // if (date !== "" && table !== "") {
    //   addReservation(selectData._id, date, parseInt(table))
    //     .then((result) => {
    //       console.log(result);
    //       if (!result.success) {
    //         alert(result.message);
    //       } else {
    //         alert("reservation complete");
    //       }
    //     })
    //     .catch((err) => {
    //       alert(err);
    //     });
    // }
    // setDate("");
    // setTable("");
    setActive(false);
  };
  const handleShowModal = (value) => {
    setActive(true);
    // setSelectData(value);
    // console.log(value);
  };

  return (
    <>
      <Navbar />
      <div className="d-flex flex-row-reverse bd-highlight my-3 me-5">
        <button
          type="button"
          className="btn btn-success fs-4"
          onClick={() => handleShowModal()}
        >
          <AiOutlineUsergroupAdd size={30} />
          Create New Group
        </button>
      </div>
      <div className="card bg-light my-2 mx-auto" style={{ width: "50rem" }}>
        <h5 className="card-header">value.name</h5>
        <div className="d-flex justify-content-end">
          <div className="card-body py-2 " style={{ maxWidth: "85%" }}>
            <p className="card-text my-0">
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
              <label className="my-1">Group Description</label>
              <input
                type="text"
                className="form-control"
                id="Inputdes"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
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
