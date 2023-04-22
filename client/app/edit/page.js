"use client";
import Navbar from "@/component/navbar";
import { picture_mapping, picture_paths } from "@/logic/picture";
import { useState } from "react";
import { updateUser } from "@/logic/user";

const submit = async (e, { name, icon, updateIcon, color, updateColor }) => {
  e.preventDefault();
  console.log({
    name,
    icon,
    updateIcon,
    color,
    updateColor,
  });
  let updateForm = {};
  if (name !== "") updateForm.name = name;
  if (updateIcon) updateForm.icon = icon;
  if (updateColor) updateForm.color = color;
  const result = await updateUser(updateForm);
  // if (result.success) {
  //   alert("restaurant was created");
  //   window.location.href = "/";
  // } else {
  //   alert(result.msg);
  // }
};

export default function page(params) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("/user.png");
  const [updateIcon, setUpdateIcon] = useState(false);
  const [color, setColor] = useState("#FFFFFF");
  const [updateColor, setUpdateColor] = useState(false);

  return (
    <>
      <Navbar />
      <section className="vh-150 bg-image mt-4">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card">
                  <div className="card-body p-5 bg-light">
                    <h2 className="text-uppercase text-center mb-4">
                      Edit User
                    </h2>
                    <form
                      onSubmit={(e) =>
                        submit(e, {
                          name,
                          icon,
                          updateIcon,
                          color,
                          updateColor,
                        })
                      }
                    >
                      <div className="mb-3">
                        <label className="form-label">Nickname</label>
                        <input
                          type="text"
                          id="form3"
                          className="form-control form-control-md"
                          onChange={(event) => setName(event.target.value)}
                          value={name}
                        />
                      </div>
                      <div className="mb-3 d-flex justify-content-center">
                        <img
                          src={icon}
                          width="80"
                          height="80"
                          className=""
                          style={{
                            backgroundColor: color,
                            "border-radius": "60px",
                          }}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Picture</label>
                        <select
                          name="pic"
                          id="form4"
                          className="form-select form-select-md"
                          onChange={(event) => setIcon(event.target.value)}
                          value={icon}
                        >
                          {picture_paths().map((path, i) => {
                            return (
                              <option key={`option${i}`} value={path}>
                                {picture_mapping(path)}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="Check1"
                          onClick={() => setUpdateIcon(!updateIcon)}
                        />
                        <label className="form-check-label">
                          Update Picture
                        </label>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Color</label>
                        <input
                          type="color"
                          id="form5"
                          className="form-control form-control-md"
                          onChange={(event) => setColor(event.target.value)}
                          value={color}
                        />
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="Check2"
                          onClick={() => setUpdateColor(!updateColor)}
                        />
                        <label className="form-check-label">Update Color</label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn btn-outline-dark btn-lg gradient-custom-4"
                        >
                          edit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
