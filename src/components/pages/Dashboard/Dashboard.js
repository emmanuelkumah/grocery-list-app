import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import "./Dashboard.css";
import GroceryList from "./Grocery/GroceryList";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal/Modal";
import fire from "../../../services/firebase";
import firebase from "firebase";
import { useHistory } from "react-router-dom";
import { SiGravatar } from "react-icons/si";

function Dashboard({ user, handleLogOut }) {
  const [item, setItem] = useState("");
  const [complete, setComplete] = useState(false);
  const [editing, setIsEditing] = useState(false);
  const [addedGrocery, setAddedGrocery] = useState("");
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
      .collection("users")
      .doc(user.uid)
      .collection("groceries")
      .get()
      .then((snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //update the groceries state
        SetGroceries(data);
      });
    // .orderBy("created", "desc")
  }, []);

  //add input field value to the db on submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    fire
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("groceries")
      .add({
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
    fire
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("groceries")
      .doc(id)
      .delete();
  };

  //mark item as completed
  const completeItem = (id) => {
    setComplete(!complete);
    fire
      .firestore()
      .collection("users")
      .doc(user.uid)
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
  //update an item
  const updateItem = (id, grocery) => {
    setIsEditing(true); //update the edting state
    setAddedGrocery(grocery); //pass the grocery to addedGrocery state
    //open the input modal
    openModal();
    //update the item with the new value
    fire
      .firestore()
      .collection("users")
      .doc(user.uid)
      .collection("groceries")
      .doc(id)
      .set(
        {
          item: item,
        },
        { merge: true }
      )
      .then(() => {
        console.log("document merged");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //redirect user to home page after log out
  let history = useHistory();

  const redirect = () => {
    //logout user
    handleLogOut();
    //redirect user to home page after log out
    history.push("/");
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
          editing={editing}
          addedGrocery={addedGrocery}
        />
      ) : (
        <section className="dashboard_container">
          <div className="dashboard_logOut" onClick={handleLogOut}>
            <SiGravatar /> Log out
          </div>
          <div className="dashboard_header">
            <Header user={user} groceries={groceries} />
            <div className="add_Btn" onClick={openModal}>
              <AiOutlinePlus />
            </div>
          </div>

          <GroceryList
            groceries={groceries}
            removeItem={removeItem}
            completeItem={completeItem}
            openModal={openModal}
            updateItem={updateItem}
          />
        </section>
      )}
    </main>
  );
}

export default Dashboard;
