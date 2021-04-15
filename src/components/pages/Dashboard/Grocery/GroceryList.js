import React from "react";
import Grocery from "./Grocery";

function GroceryList({ groceries }) {
  return (
    <div>
      <ul className="list">
        {groceries.map((grocery) => {
          return (
            <Grocery
              key={grocery.id}
              grocery={grocery.item}
              quantity={grocery.quantity}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default GroceryList;
