import React from "react";

function GroceryInput({ item, setItem, handleFormSubmit, editing }) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter item"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        />
        {editing ? (
          <button type="submit" className="add_Item" onClick={handleFormSubmit}>
            Save Edit
          </button>
        ) : (
          <button
            type="submit"
            disabled={!item}
            className="add_Item"
            onClick={handleFormSubmit}
          >
            Add Item
          </button>
        )}
      </form>
    </div>
  );
}

export default GroceryInput;
