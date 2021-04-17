import React from "react";
import Grocery from "./Grocery";

function GroceryList({ groceries, removeItem, completeItem }) {
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
              id={grocery.id}
              isComplete={grocery.isComplete}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default GroceryList;
