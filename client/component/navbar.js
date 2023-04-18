import { BiChat, BiEditAlt } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { FiLogIn, FiLogOut } from "react-icons/fi";

export default function navbar(params) {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            <BiChat className="me-2" size={30} />
            Chat Network
          </a>
          <div className="d-inline-flex align-items-center m-0">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
              width="30"
              height="30"
              className=""
            />
            <p className="d-inline-block mx-2 my-0 fs-5">Username</p>
            {/* login, signup, logout, edit*/}
            <a className="navbar-brand" href="/login">
              <FiLogIn className="me-2" size={30} />
              Login
            </a>
            <a className="navbar-brand" href="/signup">
              <BsPersonAdd className="me-2" size={30} />
              Signup
            </a>
            <a className="navbar-brand" href="/edit">
              <BiEditAlt className="me-2" size={30} />
              Edit
            </a>
            <a className="navbar-brand" href="/">
              <FiLogOut className="me-2" size={30} />
              Logout
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
