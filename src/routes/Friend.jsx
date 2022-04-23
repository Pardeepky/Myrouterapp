import React from "react";
import { Link } from "react-router-dom";
const Friend = ({ items }) => {
  return (
    <div>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      ></nav>
      {items.map((item) => {
        const { id, Name } = item;
        return (
          <nav>
            <Link to={`/friends/${id}`} key={id}>
              {Name}
            </Link>
          </nav>
        );
      })}
    </div>
  );
};

export default Friend;
