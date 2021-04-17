import React from "react";
import { FaTimes } from "react-icons/fa";
import GroceryInput from "../Grocery/GroceryInput";

function Modal({ closeModal, isModalOpen, item, setItem, handleFormSubmit }) {
  return (
    <section
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h2>What you you like to buy today</h2>
        <GroceryInput
          item={item}
          setItem={setItem}
          handleFormSubmit={handleFormSubmit}
        />
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </section>
  );
}

export default Modal;
