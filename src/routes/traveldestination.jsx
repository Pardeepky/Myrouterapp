import React, { useState, useEffect } from "react";
import List2 from "./List2";
import Alert from "./Alert";
const getLocalStorage = () => {
  let list2 = localStorage.getItem("list2");
  if (list2) {
    return JSON.parse(localStorage.getItem("list2"));
  } else {
    return [];
  }
};

export default function Hobbies() {
  const [name, setName] = useState("");
  const [list2, setList2] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, "danger", "please enter value");
    } else if (name && isEditing) {
      const newList = list2.map((item) => {
        if (item.id === editID) {
          return { ...item, title: name };
        }
        return item;
      });
      setList2(newList);
      setName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "success", "value changed");
    } else {
      showAlert(true, "success", "item added to the list");
      const newItem = {
        id: new Date().getTime().toString(),
        title: name.toUpperCase(),
      };

      setList2([...list2, newItem]);
      setName("");
    }
  };

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, "danger", "empty list");
    setList2([]);
  };
  const removeItem = (id) => {
    showAlert(true, "danger", "item removed");
    setList2(list2.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list2.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem("list2", JSON.stringify(list2));
  }, [list2]);
  return (
    <>
      <section className="section-center">
        <form className="item-form" onSubmit={handleSubmit}>
          {alert.show && (
            <Alert {...alert} removeAlert={showAlert} list2={list2} />
          )}

          <h3>Travel Destination</h3>
          <div className="form-control">
            <input
              type="text"
              className="item"
              placeholder="e.g. Paris"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list2.length > 0 && (
          <div className="item-container">
            <List2 items={list2} removeItem={removeItem} editItem={editItem} />
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </>
  );
}
