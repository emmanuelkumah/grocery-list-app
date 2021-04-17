import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import "./Dashboard.css";
import GroceryList from "./Grocery/GroceryList";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal/Modal";
import fire from "../../../services/firebase";
import firebase from "firebase";

function Dashboard() {
  const [item, setItem] = useState("");
  const [complete, setComplete] = useState(false);
  const [groceries, SetGroceries] = useState([]);

  //close and open modal
  const [isModalOpen, setOpenModal] = useState(false);

  //openModal
  const openModal = () => {
    setOpenModal(true);
  };
  //close the modal
  const closeModal = () => {
    setOpenModal(false);
  };

  //Access the db and fetch documents from collection when component is rendered
  useEffect(() => {
    const unsubscribe = fire
      .firestore()
      .collection("groceries")
      .onSnapshot((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // update the groceries state value
        SetGroceries(data);
      });
  }, []);

  //handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fire.firestore().collection("groceries").add({
      //add item to the db on form submit
      item: item,
      isComplete: complete,
      created: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //clear form input
    setItem("");
  };

  //remove item from db
  const removeItem = (id) => {
    fire.firestore().collection("groceries").doc(id).delete();
  };

  //mark item as completed
  const completeItem = (id) => {
    setComplete(!complete);
    fire
      .firestore()
      .collection("groceries")
      .doc(id)
      .set(
        {
          //update the value of isComplete
          isComplete: complete,
        },
        { merge: true }
      )
      .then(() => {
        console.log("document updated");
      })
      .catch((error) => {
        console.log("error updating", error);
      });
  };

  return (
    <main>
      {isModalOpen ? (
        <Modal
          closeModal={closeModal}
          isModalOpen={isModalOpen}
          item={item}
          setItem={setItem}
          handleFormSubmit={handleFormSubmit}
        />
      ) : (
        <section className="dashboard_container">
          <Header />
          <div className="add_Btn" onClick={openModal}>
            <AiOutlinePlus />
          </div>

          <GroceryList
            groceries={groceries}
            removeItem={removeItem}
            completeItem={completeItem}
          />
        </section>
      )}
    </main>
  );
}

export default Dashboard;
