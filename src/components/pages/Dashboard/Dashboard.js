import React, { useState } from "react";
import Header from "./Header/Header";
import "./Dashboard.css";
import GroceryList from "./Grocery/GroceryList";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal/Modal";

function Dashboard() {
  const [groceries, SetGroceries] = useState([
    { id: 1, item: "Milk", quantity: 20 },
    { id: 2, item: "Vegetable", quantity: 20 },
    { id: 3, item: "Cereals", quantity: 5 },
  ]);
  const [isModalOpen, setOpenModal] = useState(false);
  const [isModalClose, setCloseModal] = useState(false);

  //openModal
  const openModal = () => {
    setOpenModal(true);
  };
  //close the modal
  const closeModal = () => {
    setOpenModal(false);
  };
  return (
    <main>
      {isModalOpen ? (
        <Modal closeModal={closeModal} isModalOpen={isModalOpen} />
      ) : (
        <section className="dashboard_container">
          <Header />
          <div className="add_Btn" onClick={openModal}>
            <AiOutlinePlus />
          </div>

          <GroceryList groceries={groceries} />
        </section>
      )}
    </main>
  );
}

export default Dashboard;
