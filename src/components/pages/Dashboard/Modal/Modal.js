import React from "react";
import { FaTimes } from "react-icons/fa";
import GroceryInput from "../Grocery/GroceryInput";

function Modal({
  closeModal,
  isModalOpen,
  item,
  setItem,
  handleFormSubmit,
  editing,
  addedGrocery,
}) {
  return (
    <section
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        {editing ? (
          <h2>Edit {addedGrocery}</h2>
        ) : (
          <h2>What would you like to buy</h2>
        )}

        <GroceryInput
          item={item}
          setItem={setItem}
          handleFormSubmit={handleFormSubmit}
          editing={editing}
        />
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </section>
  );
}

export default Modal;
