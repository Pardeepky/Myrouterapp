import React, { useState } from "react";
import { Modal, ModalBody, ModalFooter, Button } from "reactstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
const DestinationList = ({ items, removeItem, editItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState();

  const removeItems = (id) => {
    setIsOpen(!isOpen);
    setId(id);
  };

  const deletePreson = () => {
    setIsOpen(!isOpen);
    removeItem(id);
  };

  return (
    <>
      <div className="grocery-list">
        {items.map((item) => {
          const { id, title } = item;
          return (
            <article className="grocery-item" key={id}>
              <p className="title">{title}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="edit-btn"
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="delete-btn"
                  onClick={() => removeItems(id)}
                >
                  <FaTrash />
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <Modal isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <ModalBody>Are you sure you want to delete.</ModalBody>
        <ModalFooter>
          <Button onClick={deletePreson}>Yes</Button>
          <Button onClick={() => setIsOpen(!isOpen)}>No</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default DestinationList;
