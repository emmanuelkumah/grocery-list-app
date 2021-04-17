import React from "react";

function GroceryInput({ item, setItem, handleFormSubmit }) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter item"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        <button className="add_Item" onClick={handleFormSubmit}>
          Add Item{" "}
        </button>
      </form>
    </div>
  );
}

export default GroceryInput;
