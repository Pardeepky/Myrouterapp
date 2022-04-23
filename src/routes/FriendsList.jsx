import React from "react";
const List3 = ({ items }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, Name, Age } = item;
        return (
          <article className="grocery-item" key={id}>
            <p className="title">
              {Name} {Age}
            </p>
          </article>
        );
      })}
    </div>
  );
};

export default List3;
