import React from "react";
import Grocery from "./Grocery";

function GroceryList({
  groceries,
  removeItem,
  completeItem,
  openModal,
  updateItem,
}) {
  return (
    <div>
      <ul className="list">
        {groceries.map((grocery) => {
          return (
            <Grocery
              key={grocery.id}
              grocery={grocery.item}
              removeItem={removeItem}
              completeItem={completeItem}
              updateItem={updateItem}
              id={grocery.id}
              isComplete={grocery.isComplete}
              openModal={openModal}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default GroceryList;
