import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import { NavLink } from "reactstrap";
import Friend from "./friend";

const getLocalStorage = () => {
  let list3 = localStorage.getItem("list3");
  if (list3) {
    return JSON.parse(localStorage.getItem("list3"));
  } else {
    return [];
  }
};

export default function Friends() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [list3, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age) {
      showAlert(true, "danger", "please enter both value");
    } else if (name && age && isEditing) {
      setList(
        list3.map((item) => {
          if (item.id === editID) {
            return { ...item, Name: name, Age: age };
          }
          return item;
        })
      );
      setName("");
      setAge("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "friend added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        Name: name,
        Age: age,
      };

      setList([...list3, newItem]);
      setName("");
      setAge("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  useEffect(() => {
    localStorage.setItem("list3", JSON.stringify(list3));
  }, [list3]);

  return (
    <>
      <form className="item-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} removeAlert={showAlert} list3={list3} />
        )}
        <div style={{ display: "flex" }}>
          <nav
            style={{
              borderRight: "solid 1px",
              padding: "1rem",
            }}
          >
            <input
              type="text"
              className="item"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />{" "}
            |{" "}
            <input
              type="text"
              className="item"
              placeholder="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </nav>
        </div>
      </form>

      <NavLink>
        {list3.length > 0 && (
          <div>
            <Friend items={list3} />
          </div>
        )}
      </NavLink>
      <Outlet />
    </>
  );
}
