import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

function Modal({ closeModal, isModalOpen }) {
  return (
    <section
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <h2>What you you like to buy today</h2>
        <input type="text" placeholder="Enter item" />
        <button className="add_Item">Add Item </button>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </section>
  );
}

export default Modal;
